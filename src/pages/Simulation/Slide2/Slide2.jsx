import { useEffect, useMemo, useRef, useState } from "react";
import "./Slide2.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

const BASE = import.meta.env.BASE_URL || "/";

// ✅ Use a safe join so it works in local + GitHub pages (base subfolder)
const joinBase = (p) => `${BASE}${String(p).replace(/^\/+/, "")}`;

// ✅ Primary URLs (what you intended)
const PAD_URL = joinBase("models/pad_2.stl");

// ⚠️ Your code had "Protoype-stripped.stl" (typo). We’ll try BOTH spellings.
// Put whichever is correct in /public/models/
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
  return Math.min(3, Math.max(0, n - 1)); // 0..3
}

/* ------------------------
   STL loading helpers
------------------------ */
function loadSTL(url) {
  return new Promise((resolve, reject) => {
    const loader = new STLLoader();
    loader.load(url, resolve, undefined, reject);
  });
}

async function loadSTLWithFallback(urls, onTried) {
  let lastErr = null;
  for (const u of urls) {
    try {
      onTried?.(u);
      const g = await loadSTL(u);
      return { geom: g, url: u };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("All STL URLs failed");
}

/* ------------------------
   STL orientation helpers
------------------------ */

// Choose rotation that makes the object "stand" (largest Y size)
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

// Center XZ, put bottom on Y=0, and return a scale to hit targetSize meters
function groundCenterAndScale(geom, targetSize = 1.0) {
  const g = geom.clone();
  g.computeBoundingBox();
  const bb = g.boundingBox;

  const center = new THREE.Vector3();
  bb.getCenter(center);
  const minY = bb.min.y;

  // Center XZ and place on floor Y=0
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
   MEASUREMENT GRID (CM)
========================= */
function makeFloorTextMesh(text, { fontSize = 56 } = {}) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 256;
  canvas.height = 128;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = "rgba(0, 229, 255, 0.95)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;

  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
  });

  const geo = new THREE.PlaneGeometry(0.18, 0.09);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = 10;
  return mesh;
}

function addMeasurementGridCm({
  parent,
  lengthM,
  widthM,
  originX = 0,
  originZ = 0,
  minorCm = 10,
  majorCm = 50,
  y = 0.002,
}) {
  const group = new THREE.Group();
  group.name = "MeasurementGridCM";

  const halfL = lengthM / 2;
  const halfW = widthM / 2;

  const minorM = minorCm / 100;
  const majorM = majorCm / 100;

  const minorMat = new THREE.LineBasicMaterial({
    color: 0x00c8ff,
    transparent: true,
    opacity: 0.18,
  });

  const majorMat = new THREE.LineBasicMaterial({
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.6,
  });

  const makeLine = (x1, z1, x2, z2, mat) => {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, y, z1),
      new THREE.Vector3(x2, y, z2),
    ]);
    const line = new THREE.Line(geo, mat);
    line.renderOrder = 1;
    return line;
  };

  const isMajor = (from0, step) => {
    const n = from0 / step;
    return Math.abs(n - Math.round(n)) < 1e-6;
  };

  for (let x = -halfL; x <= halfL + 1e-6; x += minorM) {
    const from0 = x + halfL;
    group.add(makeLine(x, -halfW, x, halfW, isMajor(from0, majorM) ? majorMat : minorMat));
  }
  for (let z = -halfW; z <= halfW + 1e-6; z += minorM) {
    const from0 = z + halfW;
    group.add(makeLine(-halfL, z, halfL, z, isMajor(from0, majorM) ? majorMat : minorMat));
  }

  const labelY = y + 0.004;
  const labelLineZ = THREE.MathUtils.clamp(originZ, -halfW, halfW);
  const labelLineX = THREE.MathUtils.clamp(originX, -halfL, halfL);

  // X labels
  for (let x = -halfL; x <= halfL + 1e-6; x += majorM) {
    const cmFromOrigin = Math.round((x - originX) * 100);
    const t = makeFloorTextMesh(`${cmFromOrigin} cm`, { fontSize: 56 });
    t.position.set(x, labelY, labelLineZ);
    group.add(t);
  }

  // Z labels
  for (let z = -halfW; z <= halfW + 1e-6; z += majorM) {
    const cmFromOrigin = Math.round((z - originZ) * 100);
    const t = makeFloorTextMesh(`${cmFromOrigin} cm`, { fontSize: 56 });
    t.position.set(labelLineX, labelY, z);
    t.rotation.z = Math.PI / 2;
    group.add(t);
  }

  parent.add(group);
  return group;
}

/* =========================
   WALL RULERS (CM)
========================= */
function makeWallTextMesh(text, { fontSize = 54 } = {}) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 256;
  canvas.height = 128;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = "rgba(0, 229, 255, 0.95)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;

  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
  });

  const geo = new THREE.PlaneGeometry(0.18, 0.09);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 10;
  return mesh;
}

function addWallRulersCm({
  parent,
  lengthM,
  widthM,
  heightM,
  wallThickness = 0.05,
  minorCm = 10,
  majorCm = 50,
  surfaceOffset = 0.002,
}) {
  const group = new THREE.Group();
  group.name = "WallRulersCM";

  const minorM = minorCm / 100;
  const majorM = majorCm / 100;

  const minorMat = new THREE.LineBasicMaterial({
    color: 0x00c8ff,
    transparent: true,
    opacity: 0.25,
  });

  const majorMat = new THREE.LineBasicMaterial({
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.7,
  });

  const makeLine = (a, b, mat) => {
    const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
    const line = new THREE.Line(geo, mat);
    line.renderOrder = 2;
    return line;
  };

  const isMajor = (valM) => {
    const n = valM / majorM;
    return Math.abs(n - Math.round(n)) < 1e-6;
  };

  const halfL = lengthM / 2;
  const halfW = widthM / 2;

  const zWall = -halfW + wallThickness / 2 + surfaceOffset;

  // A) HEIGHT ruler (vertical)
  {
    const xRuler = -halfL + 0.12;
    for (let y = 0; y <= heightM + 1e-6; y += minorM) {
      const major = isMajor(y);
      const tickLen = major ? 0.18 : 0.1;

      group.add(
        makeLine(
          new THREE.Vector3(xRuler, y, zWall),
          new THREE.Vector3(xRuler + tickLen, y, zWall),
          major ? majorMat : minorMat
        )
      );

      if (major) {
        const cm = Math.round(y * 100);
        const t = makeWallTextMesh(`${cm} cm`, { fontSize: 54 });
        t.position.set(xRuler + tickLen + 0.12, y, zWall);
        group.add(t);
      }
    }
  }

  // B) LENGTH ruler (horizontal)
  {
    const yRuler = 0.22;
    for (let x = -halfL; x <= halfL + 1e-6; x += minorM) {
      const fromLeft = x + halfL;
      const major = isMajor(fromLeft);
      const tickLen = major ? 0.16 : 0.09;

      group.add(
        makeLine(
          new THREE.Vector3(x, yRuler, zWall),
          new THREE.Vector3(x, yRuler + tickLen, zWall),
          major ? majorMat : minorMat
        )
      );

      if (major) {
        const cm = Math.round(fromLeft * 100);
        const t = makeWallTextMesh(`${cm} cm`, { fontSize: 54 });
        t.position.set(x, yRuler + tickLen + 0.1, zWall);
        t.rotation.z = Math.PI / 2;
        group.add(t);
      }
    }
  }

  parent.add(group);
  return group;
}

/* =========================
   RECOMMENDATION CONTENT
========================= */
const TREATMENT = {
  hotspot: {
    title: "Hotspot Treatment",
    what: [
      "A hotspot is a part of the room where sound becomes too strong or “focuses” in one area.",
      "It can happen when reflections and low-frequency build-up collect at certain points (commonly corners or near walls).",
      "Your data detects hotspot based on the measured parameters and classification output from the system.",
    ],
    fixed: {
      key: "bass_trap",
      label: "Bass Trap (Recommended)",
      desc:
        "Bass traps help reduce low-frequency build-up and smooth the room response. They are usually placed in corners and wall–ceiling corners where bass energy collects.",
      options: [
        {
          name: "Rockwool / Mineral Wool Corner Bass Trap",
          text:
            "Common DIY/pro option. Materials are widely available in PH hardware suppliers; many builders also sell ready-made corner traps online.",
        },
        {
          name: "Foam Corner Bass Trap (Acoustic Foam)",
          text:
            "Easy to buy (PH e-commerce). Works mainly on mid/high-bass compared to thick wool traps, but still helps for basic control.",
        },
        {
          name: "Panel Bass Trap (Thick Broadband Panels)",
          text:
            "Thicker wall panels placed at corners/first reflections. Often sold locally by acoustic treatment shops and custom builders.",
        },
        {
          name: "Tube / Cylindrical Bass Trap",
          text:
            "Portable and repositionable. Some local sellers offer cylindrical traps; can also be custom-made by upholstery/wood shops.",
        },
      ],
      footnote: "Tip: Corner placement usually gives the biggest improvement for hotspots caused by low-frequency build-up.",
    },
  },

  deadspot: {
    title: "Deadspot Treatment",
    what: [
      "A deadspot is a part of the room that feels weak, dull, or “missing detail.”",
      "It can happen when reflections cancel out or when the space becomes overly absorptive in certain areas.",
      "Your data detects deadspot based on the measured parameters and classification output from the system.",
    ],
    fixed: {
      key: "diffuser",
      label: "Diffuser (Recommended)",
      desc:
        "Diffusers scatter reflections instead of removing them. This helps make the room feel more natural and balanced, improving spaciousness without adding strong echo.",
      options: [
        {
          name: "QRD Diffuser (1D)",
          text: "Common studio diffuser type. Available via local acoustic builders and custom wood shops in PH.",
        },
        {
          name: "Skyline Diffuser (2D)",
          text:
            "Scatters sound in many directions. Often made-to-order locally; some ready-made options appear on PH marketplaces.",
        },
        {
          name: "Poly / Curved Diffuser",
          text: "Smooth scattering (good for small rooms). Usually custom-made using plywood/curved panels by local fabricators.",
        },
        {
          name: "Slat / Hybrid Diffuser Panel",
          text: "Hybrid look (wood slats + backing). Common in PH interior builds; can be ordered from acoustic/interior contractors.",
        },
      ],
      footnote: "Tip: Rear wall diffusion often helps deadspots by restoring useful reflections without making the room harsh.",
    },
  },
};

/* =========================
   SLIDE2
========================= */
export default function Slide2({ rowsFor3D, spatial }) {
  const hasData = Array.isArray(rowsFor3D) && rowsFor3D.length > 0;

  const [focusClass, setFocusClass] = useState("all"); // all | hotspot | deadspot
  const [showGuide, setShowGuide] = useState(false);

  // per-type applied state
  const [applied, setApplied] = useState({ hotspot: false, deadspot: false });

  // before/after view
  const [viewMode, setViewMode] = useState("before"); // before | after

  const counts = useMemo(() => {
    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    let hot = 0,
      dead = 0,
      neutral = 0;
    for (const r of rows) {
      const cls = normClass(getField(r, "Classification") ?? "");
      if (cls.includes("hot")) hot++;
      else if (cls.includes("dead")) dead++;
      else neutral++;
    }
    return { hot, dead, neutral, total: rows.length };
  }, [rowsFor3D]);

  const filteredRows = useMemo(() => {
    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    if (focusClass === "all") return rows;

    const want = focusClass === "hotspot" ? "hot" : "dead";
    return rows.filter((r) => normClass(getField(r, "Classification")).includes(want));
  }, [rowsFor3D, focusClass]);

  // clean UX: when changing focus, return to BEFORE view
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
        {/* LEFT: 3D */}
        <div className="glass-card glass-card--bigLeft">
          <div className="sim3d-card sim3d-card--three">
            <ThreeRoom
              rowsFor3D={filteredRows}
              spatial={spatial}
              focusClass={focusClass}
              viewMode={viewMode}
              isApplied={isApplied}
            />

            {/* LEGEND (clickable) */}
            <div className="three-legend">
              <div className="three-legend-title">Legend (Click to filter)</div>

              <button
                type="button"
                className={`legend-btn ${focusClass === "hotspot" ? "on" : ""}`}
                onClick={() => setFocusClass("hotspot")}
                disabled={!hasData}
                title={!hasData ? "Deploy data first in Slide 1" : "Show hotspots only"}
              >
                <span className="swatch swatch-hot" /> Hotspot ({counts.hot})
              </button>

              <button
                type="button"
                className={`legend-btn ${focusClass === "deadspot" ? "on" : ""}`}
                onClick={() => setFocusClass("deadspot")}
                disabled={!hasData}
                title={!hasData ? "Deploy data first in Slide 1" : "Show deadspots only"}
              >
                <span className="swatch swatch-dead" /> Deadspot ({counts.dead})
              </button>

              <button
                type="button"
                className={`legend-btn ${focusClass === "all" ? "on" : ""}`}
                onClick={() => setFocusClass("all")}
                disabled={!hasData}
                title={!hasData ? "Deploy data first in Slide 1" : "Show all pads"}
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
          </div>
        </div>

        {/* RIGHT: RECOMMENDATION (APPLIED) */}
        <div className="glass-card glass-card--recommend">
          <h2 className="card-title card-title--recommend">RECOMMENDATION</h2>

          <div className="recommend-inner">
            {/* Toolbar */}
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

            {/* Guide (collapsible) */}
            {showGuide && (
              <div className="guide-card">
                <div className="guide-title">How to use Slide 2</div>
                <ol className="guide-list">
                  <li>
                    Go to Slide 1 → Import CSV → then click <b>Deploy</b>.
                  </li>
                  <li>
                    In Slide 2, click <b>Hotspot</b> or <b>Deadspot</b> (Legend or buttons).
                  </li>
                  <li>Read the treatment recommendation.</li>
                  <li>
                    Click <b>Apply Treatment</b> to preview the “After” view in 3D.
                  </li>
                  <li>
                    Use <b>Before / After</b> to compare.
                  </li>
                </ol>
                <div className="guide-note">
                  Note: Treatment preview is a visual indicator (green pads) to help users understand changes.
                </div>
              </div>
            )}

            {!hasData ? (
              <div className="info-card">
                <div className="info-title">No data detected</div>
                <div className="info-text">
                  Please import and deploy your data in <b>Slide 1</b> first.
                </div>
              </div>
            ) : (
              <>
                <div className="info-card" style={{ marginBottom: 16 }}>
                  <div className="info-title">What are Hotspot and Deadspot?</div>
                  <div className="info-text">
                    <b>Hotspot</b> = sound energy becomes too strong in a specific area (often due to reflections + build-up).
                    <br />
                    <b>Deadspot</b> = sound feels weak/dull in a specific area (often due to cancellations or uneven reflections).
                    <br />
                    These are detected from your measured parameters and the system’s classification result.
                  </div>
                </div>

                <div className="select-card">
                  <div className="select-title">
                    What you want to select: <b>Hotspot</b> or <b>Deadspot</b>?
                  </div>

                  <div className="select-actions">
                    <button type="button" className="select-btn" onClick={() => setFocusClass("hotspot")}>
                      Select Hotspot
                    </button>
                    <button type="button" className="select-btn" onClick={() => setFocusClass("deadspot")}>
                      Select Deadspot
                    </button>
                    <button type="button" className="select-btn" onClick={() => setFocusClass("all")}>
                      Show All
                    </button>
                  </div>

                  <div className="select-hint">You can also click the Legend inside the 3D panel.</div>
                </div>

                {focusClass === "all" ? (
                  <div className="info-card">
                    <div className="info-title">Select one to continue</div>
                    <div className="info-text">
                      Choose <b>Hotspot</b> or <b>Deadspot</b> to show the recommended treatment and apply preview.
                    </div>
                  </div>
                ) : (
                  activeTreat && (
                    <div className="treat-card">
                      <div className="treat-title">{activeTreat.title}</div>
                      <div className="treat-sub">
                        Showing <b>{filteredRows.length}</b> pad(s) in 3D
                      </div>

                      <div className="treat-main">
                        <div className="treat-badge">{activeTreat.fixed.label}</div>
                        <div className="treat-desc">{activeTreat.fixed.desc}</div>
                      </div>

                      <div className="treat-actions">
                        <button
                          type="button"
                          className="apply-btn"
                          onClick={applyTreatment}
                          disabled={isApplied}
                          title={isApplied ? "Treatment already applied" : "Apply and preview After"}
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
                            title={!isApplied ? "Apply treatment to enable After view" : "View treated preview"}
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
                  )
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
function ThreeRoom({ rowsFor3D, spatial, focusClass, viewMode, isApplied }) {
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

  // ✅ pad model state
  const padRef = useRef({
    ready: false,
    geom: null,
    baseScale: 1,
    fixYaw: 0,
  });

  // ✅ prototype model state
  const protoRef = useRef({
    mesh: null,
    loaded: false,
  });

  // ✅ store mapping for InstancedMesh hover
  const instMapRef = useRef({
    rows: [],
    mesh: null,
  });

  // ✅ measurement origin (0 cm) anchored to prototype position
  const [measureOrigin, setMeasureOrigin] = useState({ x: 0, z: 0 });

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
      transparent: false,
      opacity: 1,
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

        const inst = instMapRef.current.mesh;
        if (!inst) {
          if (tip.show) setTip((t) => ({ ...t, show: false }));
          lastText.current = "";
          return;
        }

        const hits = raycasterRef.current.intersectObject(inst, false);
        if (!hits.length) {
          if (tip.show) setTip((t) => ({ ...t, show: false }));
          lastText.current = "";
          return;
        }

        const hit = hits[0];
        const id = hit.instanceId;
        const row = instMapRef.current.rows?.[id];
        if (!row) return;

        const idx = id + 1;
        const text = [
          `#${idx}`,
          `Layer: ${getField(row, "Layer") ?? "-"}`,
          `Angle: ${getField(row, "Angle") ?? "-"}`,
          `Ultrasonic: ${getField(row, "Ultrasonic", "Distance", "UTV") ?? "-"}`,
          `Decibel: ${getField(row, "Decibel", "DB", "dB") ?? "-"}`,
          `RT60: ${getField(row, "RT60", "Reverberation") ?? "-"}`,
          `Classification: ${getField(row, "Classification") ?? "-"}`,
        ].join("\n");

        if (text !== lastText.current || !tip.show) {
          lastText.current = text;
          setTip({ show: true, x: mx + 14, y: my + 14, text });
        } else {
          setTip((t) => ({ ...t, x: mx + 14, y: my + 14 }));
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
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onLeave);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement && mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  /* ---------- ROOM ---------- */
  useEffect(() => {
    const { roomGroup } = threeRef.current;
    if (!roomGroup) return;

    roomGroup.clear();

    const lengthM =
      spatial?.lengthCm != null && Number.isFinite(spatial.lengthCm) ? spatial.lengthCm / 100 : 3;

    const widthM =
      spatial?.widthCm != null && Number.isFinite(spatial.widthCm) ? spatial.widthCm / 100 : 3;

    const heightCm = toNumber(spatial?.heightRaw);
    const heightM = heightCm != null ? heightCm / 100 : 2.6;

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(lengthM, widthM), matsRef.current.floor);
    floor.rotation.x = -Math.PI / 2;
    roomGroup.add(floor);

    const thickness = 0.05;
    const wallMat = matsRef.current.wall;

    const wall1 = new THREE.Mesh(new THREE.BoxGeometry(lengthM, heightM, thickness), wallMat);
    wall1.position.set(0, heightM / 2, -widthM / 2);
    roomGroup.add(wall1);

    const wall2 = new THREE.Mesh(new THREE.BoxGeometry(lengthM, heightM, thickness), wallMat);
    wall2.position.set(0, heightM / 2, widthM / 2);
    roomGroup.add(wall2);

    const wall3 = new THREE.Mesh(new THREE.BoxGeometry(thickness, heightM, widthM), wallMat);
    wall3.position.set(-lengthM / 2, heightM / 2, 0);
    roomGroup.add(wall3);

    const wall4 = new THREE.Mesh(new THREE.BoxGeometry(thickness, heightM, widthM), wallMat);
    wall4.position.set(lengthM / 2, heightM / 2, 0);
    roomGroup.add(wall4);

    addMeasurementGridCm({
      parent: roomGroup,
      lengthM,
      widthM,
      originX: measureOrigin.x,
      originZ: measureOrigin.z,
      minorCm: 10,
      majorCm: 50,
      y: 0.002,
    });

    addWallRulersCm({
      parent: roomGroup,
      lengthM,
      widthM,
      heightM,
      wallThickness: thickness,
      minorCm: 10,
      majorCm: 50,
      surfaceOffset: 0.002,
    });
  }, [spatial, measureOrigin]);

  /* ---------- LOAD PAD (ONLY ONCE) ---------- */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (padRef.current.ready) return;

      setStatus("Loading pad_2.stl…");
      try {
        const { geom } = await loadSTLWithFallback([PAD_URL], () => {});
        if (cancelled) return;

        const upright = orientGeometryUpright(geom);
        const { geom: prepared, scale } = groundCenterAndScale(upright, 1.0);

        // determine a consistent yaw fix so the pad faces correctly
        prepared.computeBoundingBox();
        const size = new THREE.Vector3();
        prepared.boundingBox.getSize(size);

        // pick smallest of X/Z as thickness axis (ignore Y)
        const thicknessAxis = size.x <= size.z ? "x" : "z";
        const fixYaw = thicknessAxis === "x" ? -Math.PI / 2 : 0;

        padRef.current.geom = prepared;
        padRef.current.baseScale = scale;
        padRef.current.fixYaw = fixYaw;
        padRef.current.ready = true;

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

  /* ---------- LOAD PROTOTYPE (TRY BOTH FILENAMES) ---------- */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { protoGroup } = threeRef.current;
      if (!protoGroup) return;
      if (protoRef.current.loaded) return;

      // fallback box while loading
      protoGroup.clear();
      const fallback = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.25, 0.25),
        new THREE.MeshStandardMaterial({ color: 0xf58727 })
      );
      fallback.position.set(0, 0.125, 0);
      protoGroup.add(fallback);

      try {
        setStatus("Loading prototype STL…");
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

        protoRef.current.mesh = mesh;
        protoRef.current.loaded = true;

        // ✅ anchor measurement 0cm to prototype position
        setMeasureOrigin({ x: mesh.position.x, z: mesh.position.z });

        setStatus(`prototype loaded ✅ (${url.split("/").slice(-1)[0]})`);
      } catch (err) {
        console.error("[Prototype] load failed ❌", err);
        setStatus(
          `FAILED to load prototype STL. Check /public/models/Prototype-stripped.stl (or Protoype-stripped.stl) and DevTools > Network.`
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =========================
     BUILD PADS (THIS WAS MISSING)
     - Uses InstancedMesh so 600+ pads is fast
========================= */
  useEffect(() => {
    const { padsGroup } = threeRef.current;
    if (!padsGroup) return;

    // clear old
    padsGroup.clear();
    instMapRef.current.mesh = null;
    instMapRef.current.rows = [];
    lastText.current = "";
    setTip((t) => (t.show ? { ...t, show: false } : t));

    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    if (!rows.length) {
      // still show status but don’t error
      setStatus((s) => (s.includes("loaded") ? s : "No pads to display (no rows)."));
      return;
    }
    if (!padRef.current.ready || !padRef.current.geom) {
      setStatus((s) => (s.includes("pad_2") ? s : "Waiting for pad_2.stl…"));
      return;
    }

    // room size for placement bounds
    const lengthM =
      spatial?.lengthCm != null && Number.isFinite(spatial.lengthCm) ? spatial.lengthCm / 100 : 3;
    const widthM =
      spatial?.widthCm != null && Number.isFinite(spatial.widthCm) ? spatial.widthCm / 100 : 3;

    const halfL = lengthM / 2;
    const halfW = widthM / 2;

    // try to read coordinates from the row (if you have them)
    const getX = (r) =>
      toNumber(getField(r, "X", "PosX", "PositionX", "X(m)", "X_m", "Xcoord", "ColumnX"));
    const getZ = (r) =>
      toNumber(getField(r, "Z", "PosZ", "PositionZ", "Z(m)", "Z_m", "Zcoord", "RowZ"));

    // split by layer (bottom to top)
    const byLayer = [[], [], [], []];
    for (const r of rows) byLayer[parseLayerIndex(getField(r, "Layer"))].push(r);

    // pad spacing: if you have coordinates, we use them.
    // otherwise, we auto-pack each layer into a grid.
    const padYGap = 0.07; // separation per layer so they don't overlap visually

    const placed = [];

    for (let li = 0; li < 4; li++) {
      const layerRows = byLayer[li];
      if (!layerRows.length) continue;

      // do we have coordinates?
      const coordCount = layerRows.reduce((acc, r) => acc + (getX(r) != null && getZ(r) != null ? 1 : 0), 0);
      const hasCoords = coordCount / layerRows.length > 0.7;

      if (hasCoords) {
        for (const r of layerRows) {
          // if coords are in CM, they’ll be huge; assume meters if abs <= 20, otherwise cm->m
          let x = getX(r);
          let z = getZ(r);
          if (x == null || z == null) continue;

          const looksLikeCm = Math.abs(x) > 20 || Math.abs(z) > 20;
          if (looksLikeCm) {
            x = x / 100;
            z = z / 100;
          }

          // clamp into room
          x = THREE.MathUtils.clamp(x, -halfL + 0.08, halfL - 0.08);
          z = THREE.MathUtils.clamp(z, -halfW + 0.08, halfW - 0.08);

          placed.push({ row: r, x, z, y: 0.001 + li * padYGap });
        }
      } else {
        // auto grid inside the room
        const n = layerRows.length;
        const cols = Math.ceil(Math.sqrt(n));
        const rowsN = Math.ceil(n / cols);

        const margin = 0.16;
        const usableL = Math.max(0.5, lengthM - margin * 2);
        const usableW = Math.max(0.5, widthM - margin * 2);

        const stepX = usableL / Math.max(1, cols);
        const stepZ = usableW / Math.max(1, rowsN);

        for (let i = 0; i < n; i++) {
          const c = i % cols;
          const rr = Math.floor(i / cols);

          const x = -usableL / 2 + stepX / 2 + c * stepX;
          const z = -usableW / 2 + stepZ / 2 + rr * stepZ;

          placed.push({ row: layerRows[i], x, z, y: 0.001 + li * padYGap });
        }
      }
    }

    if (!placed.length) {
      setStatus("No pads placed (missing coords + empty layers).");
      return;
    }

    // build InstancedMesh
    const geom = padRef.current.geom;
    const mat = matsRef.current.neutral.clone(); // we'll use instanceColor
    mat.vertexColors = true;

    const inst = new THREE.InstancedMesh(geom, mat, placed.length);
    inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // IMPORTANT for raycaster + colors
    inst.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(placed.length * 3), 3);

    const tmpObj = new THREE.Object3D();
    const color = new THREE.Color();

    for (let i = 0; i < placed.length; i++) {
      const { row, x, z, y } = placed[i];

      // choose base color
      const cls = normClass(getField(row, "Classification") ?? "");
      const base =
        viewMode === "after" && isApplied && focusClass !== "all"
          ? 0x2ecc71
          : cls.includes("hot")
          ? 0x7c0a02
          : cls.includes("dead")
          ? 0x0e4c92
          : 0xf0f0f0;

      color.setHex(base);
      inst.setColorAt(i, color);

      tmpObj.position.set(x, y, z);

      // ✅ ensure pads stand on the ground, with consistent facing
      tmpObj.rotation.set(0, padRef.current.fixYaw || 0, 0);

      // scale from STL normalization
      const s = padRef.current.baseScale || 1;
      tmpObj.scale.setScalar(s);

      tmpObj.updateMatrix();
      inst.setMatrixAt(i, tmpObj.matrix);
    }

    inst.instanceMatrix.needsUpdate = true;
    inst.instanceColor.needsUpdate = true;

    padsGroup.add(inst);

    instMapRef.current.mesh = inst;
    instMapRef.current.rows = placed.map((p) => p.row);

    setStatus((s) => (s.includes("loaded") ? s : "Pads rendered ✅"));
  }, [rowsFor3D, spatial, focusClass, viewMode, isApplied]);

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
          maxWidth: 460,
        }}
      >
        {status}
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