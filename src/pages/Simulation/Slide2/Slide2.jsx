import { useEffect, useMemo, useRef, useState } from "react";
import "./Slide2.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

/* =========================
   DEPLOY-SAFE ASSET URLS
========================= */
const BASE = import.meta.env.BASE_URL || "/";
const joinBase = (p) => `${BASE}${String(p).replace(/^\/+/, "")}`;

const PAD_URL = joinBase("models/pad_2.stl");
const PROTOTYPE_URLS = [
  joinBase("models/Prototype-stripped.stl"),
  joinBase("models/Protoype-stripped.stl"),
];

/* =========================
   HELPERS
========================= */
const normKey = (k) =>
  String(k ?? "")
    .replace(/\uFEFF/g, "")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");

function getField(row, ...names) {
  if (!row) return null;
  const wanted = names.map(normKey);
  for (const key of Object.keys(row)) {
    const nk = normKey(key);
    if (wanted.includes(nk)) return row[key];
  }
  return null;
}

function toNumber(value) {
  const n = Number(String(value ?? "").replace(/[^\d.\-]/g, ""));
  return Number.isFinite(n) ? n : null;
}

const normClass = (v) =>
  String(v ?? "")
    .replace(/\uFEFF/g, "")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[\s\-]+/g, "");

function parseLayerIndex(layerVal) {
  const raw = String(layerVal ?? "").toLowerCase();
  const m = raw.match(/(\d+)/);
  const n = m ? Number(m[1]) : 1;
  return Math.min(3, Math.max(0, n - 1));
}

function normalizeAngle360(deg) {
  const n = Number(deg);
  if (!Number.isFinite(n)) return null;
  return ((n % 360) + 360) % 360;
}

function smallestAngleDiff(a, b) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

/* =========================
   STL async loaders
========================= */
function loadSTL(url) {
  return new Promise((resolve, reject) => {
    new STLLoader().load(url, resolve, undefined, reject);
  });
}

async function loadSTLWithFallback(urls, onTry) {
  let lastErr = null;
  for (const u of urls) {
    try {
      onTry?.(u);
      const geom = await loadSTL(u);
      return { geom, url: u };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("All STL URLs failed");
}

/* ------------------------
   STL orientation helpers
------------------------ */
function orientGeometryUpright(geom) {
  const candidates = [
    new THREE.Euler(0, 0, 0),
    new THREE.Euler(-Math.PI / 2, 0, 0),
    new THREE.Euler(Math.PI / 2, 0, 0),
    new THREE.Euler(0, 0, -Math.PI / 2),
    new THREE.Euler(0, 0, Math.PI / 2),
    new THREE.Euler(0, -Math.PI / 2, 0),
    new THREE.Euler(0, Math.PI / 2, 0),
  ];

  let best = null;
  let bestHeight = -Infinity;

  for (const e of candidates) {
    const g = geom.clone();
    g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(e));
    g.computeBoundingBox();
    const size = new THREE.Vector3();
    g.boundingBox.getSize(size);
    if (size.y > bestHeight) {
      bestHeight = size.y;
      best = g;
    }
  }
  return best || geom;
}

function groundCenterAndScale(geom, targetSize = 1.0) {
  const g = geom.clone();
  g.computeBoundingBox();
  const bb = g.boundingBox;

  const center = new THREE.Vector3();
  bb.getCenter(center);
  const minY = bb.min.y;

  g.translate(-center.x, -minY, -center.z);

  g.computeBoundingBox();
  const size = new THREE.Vector3();
  g.boundingBox.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scale = targetSize / maxDim;

  g.computeVertexNormals();
  return { geom: g, scale };
}

/* =========================
   ROOM BOUNDS FROM CARDINAL ANGLES
   0   = NORTH
   90  = EAST
   180 = SOUTH
   270 = WEST
========================= */
function computeRoomBoundsFromRows(allRows = [], spatial = {}) {
  const CARDINAL_TOLERANCE = 8;
  const WALL_MARGIN_M = 0.28;

  const northVals = [];
  const eastVals = [];
  const southVals = [];
  const westVals = [];

  for (const row of allRows) {
    const angle = normalizeAngle360(toNumber(getField(row, "Angle")));
    const distCm = toNumber(
      getField(row, "Ultrasonic", "Distance", "Ultrasonic(cm)", "UTV")
    );
    if (angle == null || distCm == null || distCm <= 0) continue;

    const distM = distCm / 100;

    if (smallestAngleDiff(angle, 0) <= CARDINAL_TOLERANCE) northVals.push(distM);
    if (smallestAngleDiff(angle, 90) <= CARDINAL_TOLERANCE) eastVals.push(distM);
    if (smallestAngleDiff(angle, 180) <= CARDINAL_TOLERANCE) southVals.push(distM);
    if (smallestAngleDiff(angle, 270) <= CARDINAL_TOLERANCE) westVals.push(distM);
  }

  const spatialLengthM =
    spatial?.lengthCm != null && Number.isFinite(spatial.lengthCm)
      ? spatial.lengthCm / 100
      : 5.6;

  const spatialWidthM =
    spatial?.widthCm != null && Number.isFinite(spatial.widthCm)
      ? spatial.widthCm / 100
      : 3.2;

  const fallbackNorth = spatialWidthM / 2;
  const fallbackSouth = spatialWidthM / 2;
  const fallbackEast = spatialLengthM / 2;
  const fallbackWest = spatialLengthM / 2;

  const north = (northVals.length ? Math.max(...northVals) : fallbackNorth) + WALL_MARGIN_M;
  const east = (eastVals.length ? Math.max(...eastVals) : fallbackEast) + WALL_MARGIN_M;
  const south = (southVals.length ? Math.max(...southVals) : fallbackSouth) + WALL_MARGIN_M;
  const west = (westVals.length ? Math.max(...westVals) : fallbackWest) + WALL_MARGIN_M;

  return {
    north,
    east,
    south,
    west,
    lengthM: east + west,
    widthM: north + south,
    minX: -west,
    maxX: east,
    minZ: -north,
    maxZ: south,
    centerX: (east - west) / 2,
    centerZ: (south - north) / 2,
  };
}

/* =========================
   GRID + WALL RULERS
========================= */
function addMeasurementGridFromPrototype({
  parent,
  bounds,
  y = 0.002,
  minorCm = 10,
  majorCm = 50,
}) {
  if (!parent || !bounds) return;

  const group = new THREE.Group();
  const minorStep = minorCm / 100;

  const minorMat = new THREE.LineBasicMaterial({
    color: 0x00c8ff,
    transparent: true,
    opacity: 0.14,
  });

  const majorMat = new THREE.LineBasicMaterial({
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.28,
  });

  const makeLine = (x1, z1, x2, z2, material) => {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, y, z1),
      new THREE.Vector3(x2, y, z2),
    ]);
    return new THREE.Line(geo, material);
  };

  for (let x = bounds.minX; x <= bounds.maxX + 1e-6; x += minorStep) {
    const cmFromPrototype = Math.round(Math.abs(x) * 100);
    const isMajor = cmFromPrototype % majorCm === 0;
    group.add(makeLine(x, bounds.minZ, x, bounds.maxZ, isMajor ? majorMat : minorMat));
  }

  for (let z = bounds.minZ; z <= bounds.maxZ + 1e-6; z += minorStep) {
    const cmFromPrototype = Math.round(Math.abs(z) * 100);
    const isMajor = cmFromPrototype % majorCm === 0;
    group.add(makeLine(bounds.minX, z, bounds.maxX, z, isMajor ? majorMat : minorMat));
  }

  parent.add(group);
}

function addWallRulersAsymmetric({
  parent,
  bounds,
  heightM,
  wallThickness = 0.05,
  minorCm = 10,
  majorCm = 50,
  surfaceOffset = 0.002,
}) {
  if (!parent || !bounds) return;

  const group = new THREE.Group();
  const minorStep = minorCm / 100;

  const minorMat = new THREE.LineBasicMaterial({
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.16,
  });

  const majorMat = new THREE.LineBasicMaterial({
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.3,
  });

  const makeHorizontalX = (x1, x2, y, z, material) => {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, y, z),
      new THREE.Vector3(x2, y, z),
    ]);
    return new THREE.Line(geo, material);
  };

  const makeHorizontalZ = (x, y, z1, z2, material) => {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, y, z1),
      new THREE.Vector3(x, y, z2),
    ]);
    return new THREE.Line(geo, material);
  };

  for (let y = 0; y <= heightM + 1e-6; y += minorStep) {
    const cm = Math.round(y * 100);
    const mat = cm % majorCm === 0 ? majorMat : minorMat;

    group.add(
      makeHorizontalX(
        bounds.minX,
        bounds.maxX,
        y,
        bounds.minZ + wallThickness / 2 + surfaceOffset,
        mat
      )
    );
    group.add(
      makeHorizontalX(
        bounds.minX,
        bounds.maxX,
        y,
        bounds.maxZ - wallThickness / 2 - surfaceOffset,
        mat
      )
    );
    group.add(
      makeHorizontalZ(
        bounds.minX + wallThickness / 2 + surfaceOffset,
        y,
        bounds.minZ,
        bounds.maxZ,
        mat
      )
    );
    group.add(
      makeHorizontalZ(
        bounds.maxX - wallThickness / 2 - surfaceOffset,
        y,
        bounds.minZ,
        bounds.maxZ,
        mat
      )
    );
  }

  parent.add(group);
}

/* =========================
   RECOMMENDATION CONTENT
========================= */
const TREATMENT = {
  hotspot: {
    title: "Hotspot Treatment",
    fixed: {
      label: "Bass Trap (Recommended)",
      desc:
        "Bass traps help reduce low-frequency build-up and smooth the room response. They are usually placed in corners and wall–ceiling corners where bass energy collects.",
      options: [
        { name: "Rockwool / Mineral Wool Corner Bass Trap", text: "Common DIY/pro option." },
        { name: "Foam Corner Bass Trap", text: "Easy to buy. Works mainly on mid/high-bass." },
        { name: "Panel Bass Trap", text: "Thicker wall panels placed at corners/first reflections." },
        { name: "Tube / Cylindrical Bass Trap", text: "Portable and repositionable." },
      ],
      footnote: "Tip: Corner placement usually gives the biggest improvement for hotspots.",
    },
  },

  deadspot: {
    title: "Deadspot Treatment",
    fixed: {
      label: "Diffuser (Recommended)",
      desc:
        "Diffusers scatter reflections instead of removing them. This helps make the room feel more natural and balanced.",
      options: [
        { name: "QRD Diffuser (1D)", text: "Common studio diffuser type." },
        { name: "Skyline Diffuser (2D)", text: "Scatters sound in many directions." },
        { name: "Poly / Curved Diffuser", text: "Smooth scattering (good for small rooms)." },
        { name: "Slat / Hybrid Diffuser Panel", text: "Hybrid look (wood slats + backing)." },
      ],
      footnote: "Tip: Rear wall diffusion often helps deadspots.",
    },
  },
};

/* =========================
   SLIDE2
========================= */
export default function Slide2({ rowsFor3D, spatial }) {
  const hasData = Array.isArray(rowsFor3D) && rowsFor3D.length > 0;

  const [focusClass, setFocusClass] = useState("all");
  const [showGuide, setShowGuide] = useState(false);
  const [applied, setApplied] = useState({ hotspot: false, deadspot: false });
  const [viewMode, setViewMode] = useState("before");

  const counts = useMemo(() => {
    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    let hot = 0;
    let dead = 0;
    let neutral = 0;

    for (const r of rows) {
      const cls = normClass(getField(r, "Classification") ?? "");
      if (cls.includes("hot")) hot++;
      else if (cls.includes("dead")) dead++;
      else neutral++;
    }

    return { hot, dead, neutral, total: rows.length };
  }, [rowsFor3D]);

  const baseRt60Average = useMemo(() => {
    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    const nums = rows
      .map((r) => toNumber(getField(r, "RT60", "Reverberation")))
      .filter((n) => Number.isFinite(n));

    if (!nums.length) return null;
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
  }, [rowsFor3D]);

  const adjustedRt60Average = useMemo(() => {
    if (baseRt60Average == null) return null;

    let avg = baseRt60Average;
    if (applied.hotspot) avg -= 0.08;
    if (applied.deadspot) avg += 0.08;

    return Math.max(0, avg);
  }, [baseRt60Average, applied]);

  const rt60Status = useMemo(() => {
    if (adjustedRt60Average == null) return "—";
    if (adjustedRt60Average > 0.4) return "Hotspot";
    if (adjustedRt60Average < 0.3) return "Deadspot";
    return "Balanced";
  }, [adjustedRt60Average]);

  const filteredRows = useMemo(() => {
    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    if (focusClass === "all") return rows;

    const want = focusClass === "hotspot" ? "hot" : "dead";
    return rows.filter((r) => normClass(getField(r, "Classification")).includes(want));
  }, [rowsFor3D, focusClass]);

  useEffect(() => {
    setViewMode("before");
  }, [focusClass]);

  const activeTreat =
    focusClass === "hotspot"
      ? TREATMENT.hotspot
      : focusClass === "deadspot"
      ? TREATMENT.deadspot
      : null;

  const isApplied =
    focusClass === "hotspot"
      ? applied.hotspot
      : focusClass === "deadspot"
      ? applied.deadspot
      : false;

  const canTreat = hasData && focusClass !== "all";

  const applyTreatment = () => {
    if (!canTreat) return;

    setApplied((prev) => {
      if (focusClass === "hotspot") return { ...prev, hotspot: true };
      if (focusClass === "deadspot") return { ...prev, deadspot: true };
      return prev;
    });

    setViewMode("after");
  };

  return (
    <div className="sim-slide sim-slide-2">
      <div className="sim-row sim-row-2">
        <div className="glass-card glass-card--bigLeft">
          <div className="sim3d-card sim3d-card--three">
            <ThreeRoom
              rowsFor3D={filteredRows}
              allRows={rowsFor3D || []}
              spatial={spatial}
              focusClass={focusClass}
              viewMode={viewMode}
              isApplied={isApplied}
            />

            <div className="three-legend">
              <div className="three-legend-title">Legend (Click to filter)</div>

              <button
                type="button"
                className={`legend-btn ${focusClass === "hotspot" ? "on" : ""}`}
                onClick={() => setFocusClass("hotspot")}
                disabled={!hasData}
              >
                <span className="swatch swatch-hot" /> Hotspot ({counts.hot})
              </button>

              <button
                type="button"
                className={`legend-btn ${focusClass === "deadspot" ? "on" : ""}`}
                onClick={() => setFocusClass("deadspot")}
                disabled={!hasData}
              >
                <span className="swatch swatch-dead" /> Deadspot ({counts.dead})
              </button>

              <button
                type="button"
                className={`legend-btn ${focusClass === "all" ? "on" : ""}`}
                onClick={() => setFocusClass("all")}
                disabled={!hasData}
              >
                <span className="swatch swatch-neutral" /> All ({counts.total})
              </button>

              <div className="three-legend-row" style={{ opacity: 0.85 }}>
                Hover a pad to view details
              </div>
              <div className="three-legend-row" style={{ opacity: 0.85 }}>
                Layer 1 (bottom) → Layer 4 (top)
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                right: 18,
                top: 18,
                minWidth: 180,
                padding: "12px 14px",
                borderRadius: 14,
                background: "rgba(18, 24, 38, 0.78)",
                color: "#fff",
                zIndex: 25,
                boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                pointerEvents: "none",
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6 }}>RT60 STATUS</div>

              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>
                {adjustedRt60Average == null ? "—" : adjustedRt60Average.toFixed(3)}
              </div>

              <div style={{ fontSize: 12, marginTop: 6, opacity: 0.9 }}>Target: 0.3 – 0.4</div>

              <div style={{ fontSize: 12, marginTop: 4 }}>
                Status: <b>{rt60Status}</b>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card glass-card--recommend">
          <h2 className="card-title card-title--recommend">RECOMMENDATION</h2>

          <div className="recommend-inner">
            <div className="recommend-toolbar">
              <button
                type="button"
                className={`guide-btn ${showGuide ? "on" : ""}`}
                onClick={() => setShowGuide((v) => !v)}
              >
                {showGuide ? "Hide Guide" : "Guide"}
              </button>

              <div className="recommend-mini">
                {hasData ? (
                  <>
                    Showing <b>{filteredRows.length}</b> pad(s)
                  </>
                ) : (
                  <>No deployed data</>
                )}
              </div>
            </div>

            {showGuide && (
              <div className="guide-card">
                <div className="guide-title">How to use Slide 2</div>
                <ol className="guide-list">
                  <li>
                    Go to Slide 1 → Import CSV → then click <b>Deploy</b>.
                  </li>
                  <li>
                    In Slide 2, click <b>Hotspot</b> or <b>Deadspot</b>.
                  </li>
                  <li>Read the treatment recommendation.</li>
                  <li>
                    Click <b>Apply Treatment</b> to preview “After” in 3D.
                  </li>
                </ol>
              </div>
            )}

            {!hasData ? (
              <div className="info-card">
                <div className="info-title">No data detected</div>
                <div className="info-text">
                  Please import and deploy your data in <b>Slide 1</b> first.
                </div>
              </div>
            ) : focusClass === "all" ? (
              <div className="info-card">
                <div className="info-title">Select one to continue</div>
                <div className="info-text">
                  Choose <b>Hotspot</b> or <b>Deadspot</b> to show the recommended treatment and
                  apply preview.
                </div>
              </div>
            ) : (
              <>
                <div className="select-card">
                  <div className="select-title">
                    What you want to select: <b>Hotspot</b> or <b>Deadspot</b>?
                  </div>

                  <div className="select-actions">
                    <button
                      type="button"
                      className="select-btn"
                      onClick={() => setFocusClass("hotspot")}
                    >
                      Select Hotspot
                    </button>
                    <button
                      type="button"
                      className="select-btn"
                      onClick={() => setFocusClass("deadspot")}
                    >
                      Select Deadspot
                    </button>
                    <button
                      type="button"
                      className="select-btn"
                      onClick={() => setFocusClass("all")}
                    >
                      Show All
                    </button>
                  </div>

                  <div className="select-hint">
                    You can also click the Legend inside the 3D panel.
                  </div>
                </div>

                {activeTreat && (
                  <div className="treat-card">
                    <div className="treat-title">{activeTreat.title}</div>

                    <div className="treat-main">
                      <div className="treat-badge">{activeTreat.fixed.label}</div>
                      <div className="treat-desc">{activeTreat.fixed.desc}</div>
                    </div>

                    <div className="treat-actions">
                      <button
                        type="button"
                        className="apply-btn"
                        onClick={applyTreatment}
                        disabled={!canTreat || isApplied}
                      >
                        {isApplied ? "Applied ✓" : "Apply Treatment"}
                      </button>

                      <div className="compare-toggle">
                        <button
                          type="button"
                          className={`compare-btn ${viewMode === "before" ? "on" : ""}`}
                          onClick={() => setViewMode("before")}
                        >
                          Before
                        </button>
                        <button
                          type="button"
                          className={`compare-btn ${viewMode === "after" ? "on" : ""}`}
                          onClick={() => setViewMode("after")}
                          disabled={!isApplied}
                        >
                          After
                        </button>
                      </div>
                    </div>

                    <div className="recommend-card" style={{ marginTop: 14 }}>
                      <div className="recommend-card-title">Available Types (PH-friendly)</div>

                      <div className="recommend-list" style={{ marginTop: 10 }}>
                        {activeTreat.fixed.options.map((o) => (
                          <div className="recommend-item" key={o.name}>
                            <div className="recommend-item-name">{o.name}</div>
                            <div className="recommend-item-text">{o.text}</div>
                          </div>
                        ))}
                      </div>

                      <div className="treat-footnote">{activeTreat.fixed.footnote}</div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="scroll-rail" />
          <div className="scroll-thumb" />
        </div>
      </div>
    </div>
  );
}

/* =========================
   THREE ROOM
========================= */
function ThreeRoom({
  rowsFor3D = [],
  allRows = [],
  spatial = {},
  focusClass,
  viewMode,
  isApplied,
}) {
  const mountRef = useRef(null);
  const [tip, setTip] = useState({ show: false, x: 0, y: 0, text: "" });
  const [status, setStatus] = useState("Initializing 3D…");

  const threeRef = useRef({
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    roomGroup: null,
    padsGroup: null,
    protoGroup: null,
  });

  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());
  const hoverRAF = useRef(0);
  const lastText = useRef("");

  const padRef = useRef({
    ready: false,
    geom: null,
    baseScale: 1,
    fixYaw: 0,
  });

  const protoRef = useRef({
    mesh: null,
    loaded: false,
    fallbackBox: null,
  });

  const boundsRef = useRef(null);
  const cameraInitializedRef = useRef(false);

  const [padReadyTick, setPadReadyTick] = useState(0);
  const [protoReadyTick, setProtoReadyTick] = useState(0);

  const matsRef = useRef({
    hot: new THREE.MeshStandardMaterial({
      color: 0x7c0a02,
      emissive: 0x7c0a02,
      emissiveIntensity: 0.55,
      roughness: 0.35,
      metalness: 0.05,
    }),
    dead: new THREE.MeshStandardMaterial({
      color: 0x0e4c92,
      emissive: 0x0e4c92,
      emissiveIntensity: 0.55,
      roughness: 0.35,
      metalness: 0.05,
    }),
    neutral: new THREE.MeshStandardMaterial({
      color: 0xf0f0f0,
      emissive: 0xf0f0f0,
      emissiveIntensity: 0.12,
      roughness: 0.55,
      metalness: 0.02,
    }),
    treated: new THREE.MeshStandardMaterial({
      color: 0x2ecc71,
      emissive: 0x2ecc71,
      emissiveIntensity: 0.45,
      roughness: 0.45,
      metalness: 0.02,
    }),
    floor: new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      transparent: true,
      opacity: 0.92,
    }),
    wall: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    }),
    proto: new THREE.MeshStandardMaterial({
      color: 0xf58727,
      roughness: 0.65,
      metalness: 0.25,
    }),
  });

  /* ---------- INIT ---------- */
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if (!w || !h) {
      setStatus("3D mount has 0 width/height. Fix CSS height of .three-mount.");
      return;
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.setClearAlpha(0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.05, 200);
    camera.position.set(0, 2.5, 4);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(6, 9, 6);
    scene.add(dir);

    const roomGroup = new THREE.Group();
    const padsGroup = new THREE.Group();
    const protoGroup = new THREE.Group();
    scene.add(roomGroup);
    scene.add(padsGroup);
    scene.add(protoGroup);

    threeRef.current = { renderer, scene, camera, controls, roomGroup, padsGroup, protoGroup };
    setStatus("3D ready. Loading models…");

    const ro = new ResizeObserver(() => {
      const ww = mount.clientWidth;
      const hh = mount.clientHeight;
      renderer.setSize(ww, hh);
      camera.aspect = ww / hh;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    const onPointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      if (hoverRAF.current) cancelAnimationFrame(hoverRAF.current);
      hoverRAF.current = requestAnimationFrame(() => {
        pointerRef.current.set((mx / rect.width) * 2 - 1, -((my / rect.height) * 2 - 1));
        raycasterRef.current.setFromCamera(pointerRef.current, camera);

        const hits = raycasterRef.current.intersectObjects(padsGroup.children, false);
        if (!hits.length) {
          setTip((t) => (t.show ? { ...t, show: false } : t));
          lastText.current = "";
          return;
        }

        const hit = hits[0].object;
        const row = hit?.userData?.row;
        if (!row) return;

        const idx = (hit.userData.index ?? 0) + 1;
        const text = [
          `#${idx}`,
          `Layer: ${getField(row, "Layer") ?? "-"}`,
          `Angle: ${getField(row, "Angle") ?? "-"}`,
          `Ultrasonic: ${getField(row, "Ultrasonic", "Distance", "UTV") ?? "-"}`,
          `Decibel: ${getField(row, "Decibel", "DB", "dB") ?? "-"}`,
          `RT60: ${getField(row, "RT60", "Reverberation") ?? "-"}`,
          `Classification: ${getField(row, "Classification") ?? "-"}`,
        ].join("\n");

        if (text !== lastText.current) {
          lastText.current = text;
          setTip({ show: true, x: mx + 14, y: my + 14, text });
        } else {
          setTip((t) =>
            t.show
              ? { ...t, x: mx + 14, y: my + 14 }
              : { show: true, x: mx + 14, y: my + 14, text }
          );
        }
      });
    };

    const onLeave = () => {
      if (hoverRAF.current) cancelAnimationFrame(hoverRAF.current);
      hoverRAF.current = 0;
      lastText.current = "";
      setTip((t) => (t.show ? { ...t, show: false } : t));
    };

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      if (hoverRAF.current) cancelAnimationFrame(hoverRAF.current);
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onLeave);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  /* ---------- LOAD PAD ---------- */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (padRef.current.ready) return;

      try {
        setStatus("Loading pad_2.stl…");
        const { geom } = await loadSTLWithFallback([PAD_URL], (u) =>
          setStatus(`Loading pad… ${u.split("/").slice(-1)[0]}`)
        );
        if (cancelled) return;

        const upright = orientGeometryUpright(geom);
        const { geom: prepared, scale } = groundCenterAndScale(upright, 1.0);

        prepared.computeBoundingBox();
        const size = new THREE.Vector3();
        prepared.boundingBox.getSize(size);

        const thicknessAxis = size.x <= size.z ? "x" : "z";
        const fixYaw = thicknessAxis === "x" ? -Math.PI / 2 : 0;

        padRef.current.geom = prepared;
        padRef.current.baseScale = scale;
        padRef.current.fixYaw = fixYaw;
        padRef.current.ready = true;

        setPadReadyTick((t) => t + 1);
        setStatus("pad_2.stl loaded ✅");
      } catch (err) {
        console.error("[Pad] load failed ❌", err);
        setStatus(`FAILED to load pad_2.stl. Check DevTools > Network if ${PAD_URL} is 404.`);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------- LOAD PROTOTYPE ---------- */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { protoGroup } = threeRef.current;
      if (!protoGroup) return;
      if (protoRef.current.loaded) return;

      const fallback = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.25, 0.25),
        new THREE.MeshStandardMaterial({ color: 0xf58727 })
      );
      fallback.position.set(0, 0.125, 0);
      protoGroup.add(fallback);
      protoRef.current.fallbackBox = fallback;

      try {
        const { geom, url } = await loadSTLWithFallback(PROTOTYPE_URLS, (u) =>
          setStatus(`Loading prototype… trying ${u.split("/").slice(-1)[0]}`)
        );
        if (cancelled) return;

        const upright = orientGeometryUpright(geom);
        const { geom: prepared, scale } = groundCenterAndScale(upright, 1.8);

        const mesh = new THREE.Mesh(prepared, matsRef.current.proto);
        mesh.scale.setScalar(scale);

        protoGroup.clear();
        protoGroup.add(mesh);

        mesh.position.set(0, 0, 0);

        protoRef.current.mesh = mesh;
        protoRef.current.loaded = true;

        setProtoReadyTick((t) => t + 1);
        setStatus(`prototype loaded ✅ (${url.split("/").slice(-1)[0]})`);
      } catch (err) {
        console.error("[Prototype] load failed ❌", err);
        setStatus(
          "FAILED to load prototype STL. Put it in /public/models and check filename case (Prototype vs Protoype)."
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------- ROOM (FROM FULL DATASET, NOT FILTERED) ---------- */
  useEffect(() => {
    const { roomGroup } = threeRef.current;
    if (!roomGroup) return;

    roomGroup.clear();

    const bounds = computeRoomBoundsFromRows(allRows, spatial);
    boundsRef.current = bounds;

    const heightCm = toNumber(spatial?.heightRaw);
    const heightM = heightCm != null ? heightCm / 100 : 2.7;

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(bounds.lengthM, bounds.widthM),
      matsRef.current.floor
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(bounds.centerX, 0, bounds.centerZ);
    roomGroup.add(floor);

    const thickness = 0.05;
    const wallMat = matsRef.current.wall;

    const northWall = new THREE.Mesh(
      new THREE.BoxGeometry(bounds.lengthM, heightM, thickness),
      wallMat
    );
    northWall.position.set(bounds.centerX, heightM / 2, bounds.minZ);
    roomGroup.add(northWall);

    const southWall = new THREE.Mesh(
      new THREE.BoxGeometry(bounds.lengthM, heightM, thickness),
      wallMat
    );
    southWall.position.set(bounds.centerX, heightM / 2, bounds.maxZ);
    roomGroup.add(southWall);

    const westWall = new THREE.Mesh(
      new THREE.BoxGeometry(thickness, heightM, bounds.widthM),
      wallMat
    );
    westWall.position.set(bounds.minX, heightM / 2, bounds.centerZ);
    roomGroup.add(westWall);

    const eastWall = new THREE.Mesh(
      new THREE.BoxGeometry(thickness, heightM, bounds.widthM),
      wallMat
    );
    eastWall.position.set(bounds.maxX, heightM / 2, bounds.centerZ);
    roomGroup.add(eastWall);

    addMeasurementGridFromPrototype({
      parent: roomGroup,
      bounds,
      y: 0.002,
      minorCm: 10,
      majorCm: 50,
    });

    addWallRulersAsymmetric({
      parent: roomGroup,
      bounds,
      heightM,
      wallThickness: thickness,
      minorCm: 10,
      majorCm: 50,
      surfaceOffset: 0.002,
    });
  }, [allRows, spatial]);

  /* ---------- CAMERA FIT (ONLY WHEN ROOM / MODELS CHANGE) ---------- */
  useEffect(() => {
    const { camera, controls } = threeRef.current;
    if (!camera || !controls) return;
    if (!padRef.current.ready) return;

    const bounds = boundsRef.current || computeRoomBoundsFromRows(allRows, spatial);
    if (!bounds) return;

    const maxDim = Math.max(bounds.lengthM, bounds.widthM, 4.5);

    camera.position.set(bounds.centerX, maxDim * 0.95, bounds.centerZ + maxDim * 1.15);
    controls.target.set(bounds.centerX, 1.0, bounds.centerZ);
    controls.update();

    cameraInitializedRef.current = true;
  }, [allRows, spatial, padReadyTick, protoReadyTick]);

  /* ---------- BUILD FILTERED PADS ONLY ---------- */
  useEffect(() => {
    const { padsGroup } = threeRef.current;
    if (!padsGroup) return;

    padsGroup.clear();

    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    const bounds = boundsRef.current || computeRoomBoundsFromRows(allRows, spatial);

    if (!rows.length) {
      setStatus("No data rows to deploy.");
      return;
    }

    if (!padRef.current.ready || !padRef.current.geom) {
      setStatus("Waiting for pad_2.stl to load…");
      return;
    }

    setStatus(`Deploying ${rows.length} pads…`);

    const PAD_WORLD_SIZE = 0.22;
    const BASE_Y = 0.75;
    const LAYER_STEP = 0.42;
    const ANGLE_OFFSET_DEG = 0;

    const selectedType =
      focusClass === "hotspot" ? "hot" : focusClass === "deadspot" ? "dead" : null;

    rows.forEach((row, index) => {
      const angleDeg = normalizeAngle360(toNumber(getField(row, "Angle")));
      const distCm = toNumber(getField(row, "Ultrasonic", "Distance", "Ultrasonic(cm)", "UTV"));

      let x = 0;
      let z = 0;

      if (angleDeg != null && distCm != null && distCm > 0) {
        const theta = ((angleDeg + ANGLE_OFFSET_DEG) * Math.PI) / 180;
        const distM = distCm / 100;

        x = Math.sin(theta) * distM;
        z = -Math.cos(theta) * distM;

        x = THREE.MathUtils.clamp(x, bounds.minX + 0.05, bounds.maxX - 0.05);
        z = THREE.MathUtils.clamp(z, bounds.minZ + 0.05, bounds.maxZ - 0.05);
      }

      const layerIndex = parseLayerIndex(getField(row, "Layer") ?? "Layer 1");
      const y = BASE_Y + layerIndex * LAYER_STEP;

      const cls = normClass(getField(row, "Classification") ?? "neutral");

      let baseMat =
        cls.includes("hot")
          ? matsRef.current.hot
          : cls.includes("dead")
          ? matsRef.current.dead
          : matsRef.current.neutral;

      if (viewMode === "after" && isApplied && selectedType && cls.includes(selectedType)) {
        baseMat = matsRef.current.treated;
      }

      const padMesh = new THREE.Mesh(padRef.current.geom.clone(), baseMat);
      const finalScale = padRef.current.baseScale * PAD_WORLD_SIZE;
      padMesh.scale.setScalar(finalScale);
      padMesh.position.set(x, y, z);
      padMesh.userData = { row, index };

      const dx = -x;
      const dz = -z;
      let yaw = Math.atan2(dx, dz);
      yaw += padRef.current.fixYaw || 0;
      padMesh.rotation.set(0, yaw, 0);

      padsGroup.add(padMesh);
    });

    if (protoRef.current.mesh) {
      protoRef.current.mesh.position.set(0, 0, 0);
    } else if (protoRef.current.fallbackBox) {
      protoRef.current.fallbackBox.position.set(0, 0.125, 0);
    }

    setStatus(`Deployed ✅ ${rows.length} pads`);
  }, [rowsFor3D, allRows, spatial, padReadyTick, protoReadyTick, focusClass, viewMode, isApplied]);

  return (
    <div ref={mountRef} className="three-mount" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          padding: "8px 10px",
          borderRadius: 10,
          background: "rgba(0,0,0,0.45)",
          color: "white",
          fontSize: 12,
          zIndex: 30,
          pointerEvents: "none",
          maxWidth: 420,
        }}
      >
        {status}
        <div style={{ opacity: 0.85, marginTop: 4 }}>
          PAD_URL: {PAD_URL}
          <br />
          PROTO: {PROTOTYPE_URLS[0]} / {PROTOTYPE_URLS[1]}
        </div>
      </div>

      {tip.show && (
        <div
          style={{
            position: "absolute",
            left: tip.x,
            top: tip.y,
            whiteSpace: "pre-line",
            padding: "10px 12px",
            borderRadius: 12,
            background: "rgba(0,0,0,0.55)",
            color: "white",
            fontSize: 12,
            textAlign: "left",
            lineHeight: 1.35,
            pointerEvents: "none",
            maxWidth: 260,
            zIndex: 20,
          }}
        >
          {tip.text}
        </div>
      )}
    </div>
  );
}