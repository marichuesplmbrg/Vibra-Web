import { useEffect, useMemo, useRef, useState } from "react";
import "./Slide2.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

/* =========================
   DEPLOY-SAFE ASSET URLS
   - Works in localhost + GitHub Pages subfolder (BASE_URL)
   - Prototype tries BOTH spellings
========================= */
const BASE = import.meta.env.BASE_URL || "/";
const joinBase = (p) => `${BASE}${String(p).replace(/^\/+/, "")}`;

const PAD_URL = joinBase("models/pad_2.stl");
const PROTOTYPE_URLS = [
  joinBase("models/Prototype-stripped.stl"),
  joinBase("models/Protoype-stripped.stl"), // keep your old typo as fallback
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
   STL async loaders
------------------------ */
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

  for (let x = -halfL; x <= halfL + 1e-6; x += majorM) {
    const cmFromOrigin = Math.round((x - originX) * 100);
    const t = makeFloorTextMesh(`${cmFromOrigin} cm`, { fontSize: 56 });
    t.position.set(x, labelY, labelLineZ);
    group.add(t);
  }

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

  // HEIGHT ruler
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

  // LENGTH ruler
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

  const [focusClass, setFocusClass] = useState("all"); // all | hotspot | deadspot
  const [showGuide, setShowGuide] = useState(false);
  const [applied, setApplied] = useState({ hotspot: false, deadspot: false });
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

  useEffect(() => setViewMode("before"), [focusClass]);

  const activeTreat =
    focusClass === "hotspot" ? TREATMENT.hotspot : focusClass === "deadspot" ? TREATMENT.deadspot : null;

  const isApplied =
    focusClass === "hotspot" ? applied.hotspot : focusClass === "deadspot" ? applied.deadspot : false;

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
            ) : (
              <>
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

  const [padReadyTick, setPadReadyTick] = useState(0);
  const [protoReadyTick, setProtoReadyTick] = useState(0);

  const [measureOrigin, setMeasureOrigin] = useState({ x: 0, z: 0 });

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
          if (tip.show) setTip((t) => ({ ...t, show: false }));
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

  /* ---------- LOAD PAD (DEPLOY SAFE) ---------- */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (padRef.current.ready) return;

      setStatus("Loading pad_2.stl…");
      try {
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

  /* ---------- LOAD PROTOTYPE (TRY BOTH SPELLINGS) ---------- */
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

        protoRef.current.mesh = mesh;
        protoRef.current.loaded = true;

        setProtoReadyTick((t) => t + 1);
        setStatus(`prototype loaded ✅ (${url.split("/").slice(-1)[0]})`);
      } catch (err) {
        console.error("[Prototype] load failed ❌", err);
        setStatus(
          `FAILED to load prototype STL. Put it in /public/models and check filename case (Prototype vs Protoype).`
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------- BUILD PADS ---------- */
  useEffect(() => {
    const { padsGroup, camera, controls } = threeRef.current;
    if (!padsGroup || !camera || !controls) return;

    padsGroup.clear();

    const rows = Array.isArray(rowsFor3D) ? rowsFor3D : [];
    if (!rows.length) {
      setStatus("No data rows to deploy.");
      return;
    }

    if (!padRef.current.ready || !padRef.current.geom) {
      setStatus("Waiting for pad_2.stl to load…");
      return;
    }

    setStatus(`Deploying ${rows.length} pads…`);

    const lengthM =
      spatial?.lengthCm != null && Number.isFinite(spatial.lengthCm) ? spatial.lengthCm / 100 : 3;
    const widthM =
      spatial?.widthCm != null && Number.isFinite(spatial.widthCm) ? spatial.widthCm / 100 : 3;

    const margin = 0.18;
    const halfL = lengthM / 2 - margin;
    const halfW = widthM / 2 - margin;

    const maxDistCm =
      Math.max(...rows.map((r) => toNumber(getField(r, "Ultrasonic", "Distance", "Ultrasonic(cm)", "UTV")) ?? 0)) ||
      0;

    const SPREAD = maxDistCm >= 20 ? 1 : 30;

    const cols = Math.max(6, Math.ceil(Math.sqrt(rows.length)));
    const cellX = (halfL * 2) / (cols + 1);
    const cellZ = (halfW * 2) / (cols + 1);

    let north = -Infinity,
      south = Infinity,
      east = -Infinity,
      west = Infinity;

    const centroid = new THREE.Vector3(0, 0, 0);
    let count = 0;

    const PAD_WORLD_SIZE = 0.22;
    const LAYER_STEP = 0.45;
    const BASE_Y = 0.02;

    const selectedType = focusClass === "hotspot" ? "hot" : focusClass === "deadspot" ? "dead" : null;

    rows.forEach((row, index) => {
      const angleDeg = toNumber(getField(row, "Angle"));
      const distCm = toNumber(getField(row, "Ultrasonic", "Distance", "Ultrasonic(cm)", "UTV"));

      let x, z;

      if (angleDeg != null && distCm != null && distCm > 0) {
        const theta = (angleDeg * Math.PI) / 180;
        const distM = (distCm / 100) * SPREAD;
        x = THREE.MathUtils.clamp(Math.cos(theta) * distM, -halfL, halfL);
        z = THREE.MathUtils.clamp(Math.sin(theta) * distM, -halfW, halfW);
      } else {
        const r = Math.floor(index / cols);
        const c = index % cols;
        x = -halfL + cellX * (c + 1);
        z = -halfW + cellZ * (r + 1);
      }

      const layerIndex = parseLayerIndex(getField(row, "Layer") ?? "Layer 1");
      const y = BASE_Y + layerIndex * LAYER_STEP;

      north = Math.max(north, z);
      south = Math.min(south, z);
      east = Math.max(east, x);
      west = Math.min(west, x);

      centroid.add(new THREE.Vector3(x, 0, z));
      count++;

      const cls = normClass(getField(row, "Classification") ?? "neutral");

      let baseMat =
        cls.includes("hot") ? matsRef.current.hot : cls.includes("dead") ? matsRef.current.dead : matsRef.current.neutral;

      if (viewMode === "after" && isApplied && selectedType && cls.includes(selectedType)) {
        baseMat = matsRef.current.treated;
      }

      const padMesh = new THREE.Mesh(padRef.current.geom.clone(), baseMat);

      // ✅ IMPORTANT: keep your original scaling style, but add fixYaw for facing
      const finalScale = padRef.current.baseScale * PAD_WORLD_SIZE;
      padMesh.scale.setScalar(finalScale);
      padMesh.rotation.y = padRef.current.fixYaw || 0;

      padMesh.position.set(x, y, z);
      padMesh.userData = { row, index };
      padsGroup.add(padMesh);
    });

    const c = count ? centroid.multiplyScalar(1 / count) : new THREE.Vector3(0, 0, 0);
    const px = THREE.MathUtils.clamp(c.x, -halfL + 0.2, halfL - 0.2);
    const pz = THREE.MathUtils.clamp(c.z, -halfW + 0.2, halfW - 0.2);

    if (protoRef.current.mesh) protoRef.current.mesh.position.set(px, 0, pz);
    else if (protoRef.current.fallbackBox) protoRef.current.fallbackBox.position.set(px, 0.125, pz);

    setMeasureOrigin({ x: px, z: pz });

    const roomWidth = east - west + 0.6;
    const roomDepth = north - south + 0.6;
    const cx = (east + west) / 2;
    const cz = (north + south) / 2;

    const maxDim = Math.max(roomWidth, roomDepth, 3);
    camera.position.set(cx, maxDim * 0.9, cz + maxDim * 1.3);
    controls.target.set(cx, 1.1, cz);
    controls.update();

    setStatus(`Deployed ✅ ${rows.length} pads`);
  }, [rowsFor3D, spatial, padReadyTick, protoReadyTick, focusClass, viewMode, isApplied]);

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