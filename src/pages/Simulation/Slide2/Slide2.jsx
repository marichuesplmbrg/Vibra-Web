import { useEffect, useRef, useState } from "react";
import "./Slide2.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

/**
 * ✅ Put these files here:
 *  - public/models/pad_2.stl
 *  - public/models/Protoype-stripped.stl   (yes, your filename has Protoype)
 */
const PAD_URL = "/models/pad_2.stl";
const PROTOTYPE_URL = "/models/Protoype-stripped.stl";

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
   STL orientation helpers
------------------------ */

// Choose rotation that gives the biggest Y size (stands “upright”)
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
   - minor lines every 10cm
   - major lines every 50cm
   - labels printed ON grid lines
   - 0 cm starts at prototype position
========================= */

// ✅ plain text (no box), printed flat on the floor
function makeFloorTextMesh(text, { fontSize = 56 } = {}) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 256;
  canvas.height = 128;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = "rgba(0, 229, 255, 0.95)"; // cyan
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

  // small plane
  const geo = new THREE.PlaneGeometry(0.18, 0.09);
  const mesh = new THREE.Mesh(geo, mat);

  // lay flat on floor
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

  // grid lines
  for (let x = -halfL; x <= halfL + 1e-6; x += minorM) {
    const from0 = x + halfL;
    group.add(makeLine(x, -halfW, x, halfW, isMajor(from0, majorM) ? majorMat : minorMat));
  }
  for (let z = -halfW; z <= halfW + 1e-6; z += minorM) {
    const from0 = z + halfW;
    group.add(makeLine(-halfL, z, halfL, z, isMajor(from0, majorM) ? majorMat : minorMat));
  }

  // ✅ labels ON the grid lines and 0 cm starts at prototype position
  const labelY = y + 0.004; // tiny lift to avoid z-fighting
  const labelLineZ = THREE.MathUtils.clamp(originZ, -halfW, halfW);
  const labelLineX = THREE.MathUtils.clamp(originX, -halfL, halfL);

  // X labels on z = originZ
  for (let x = -halfL; x <= halfL + 1e-6; x += majorM) {
    const cmFromOrigin = Math.round((x - originX) * 100);
    const t = makeFloorTextMesh(`${cmFromOrigin} cm`, { fontSize: 56 });
    t.position.set(x, labelY, labelLineZ);
    group.add(t);
  }

  // Z labels on x = originX
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
   SLIDE2
========================= */
export default function Slide2({ rowsFor3D, spatial }) {
  return (
    <div className="sim-slide sim-slide-2">
      <div className="sim-row sim-row-2">
        <div className="glass-card glass-card--bigLeft">
          <div className="sim3d-card sim3d-card--three">
            <ThreeRoom rowsFor3D={rowsFor3D} spatial={spatial} />

            <div className="three-legend">
              <div className="three-legend-title">Legend</div>
              <div className="three-legend-row">
                <span className="swatch swatch-hot" /> Hotspot
              </div>
              <div className="three-legend-row">
                <span className="swatch swatch-dead" /> Deadspot
              </div>
              <div className="three-legend-row">
                <span className="swatch swatch-neutral" /> Neutral
              </div>
              <div className="three-legend-row" style={{ opacity: 0.75 }}>
                Hover a pad to view details
              </div>
              <div className="three-legend-row" style={{ opacity: 0.75 }}>
                Layer 1 (bottom) → Layer 4 (top)
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card glass-card--recommend">
          <h2 className="card-title card-title--recommend">RECOMMENDATION</h2>
          <div className="recommend-inner">
            <div className="recommend-search" />
            <div className="recommend-scroll">
              <div className="recommend-space" />
            </div>
          </div>
          <div className="scroll-rail" />
          <div className="scroll-thumb" />
        </div>
      </div>
    </div>
  );
}

function ThreeRoom({ rowsFor3D, spatial }) {
  const mountRef = useRef(null);
  const [tip, setTip] = useState({ show: false, x: 0, y: 0, text: "" });

  const [status, setStatus] = useState("Initializing 3D…");

  // ✅ tick to force rebuild after STL loads
  const [padReadyTick, setPadReadyTick] = useState(0);
  const [protoReadyTick, setProtoReadyTick] = useState(0);

  // ✅ measurement origin (0 cm) anchored to prototype position
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
  });

  const protoRef = useRef({
    mesh: null,
    loaded: false,
    fallbackBox: null,
  });

  // glow animation
  const glowPadsRef = useRef([]);
  const clockRef = useRef(new THREE.Clock());

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
      console.warn("[3D] mount size is 0:", { w, h });
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

      // glow animation
      const t = clockRef.current.getElapsedTime();
      for (const mesh of glowPadsRef.current) {
        const mat = mesh?.material;
        if (!mat) continue;

        const phase = mesh.userData?.glowPhase ?? 0;
        const wave = 0.5 + 0.5 * Math.sin(t * 2.2 + phase);

        const cls = normClass(getField(mesh.userData?.row, "Classification") ?? "neutral");
        const strong = cls.includes("hot") || cls.includes("dead");

        const base = strong ? 0.35 : 0.08;
        const amp = strong ? 0.55 : 0.18;

        mat.emissiveIntensity = base + amp * wave;
      }

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

      glowPadsRef.current.forEach((m) => {
        if (m?.material?.dispose) m.material.dispose();
        if (m?.geometry?.dispose) m.geometry.dispose();
      });
      glowPadsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- ROOM (measurement grid cm + walls) ---------- */
  useEffect(() => {
    const { roomGroup } = threeRef.current;
    if (!roomGroup) return;

    roomGroup.clear();

    const lengthM = spatial?.lengthM ?? 3;
    const widthM = spatial?.widthM ?? 3;
    const heightM = spatial?.heightM ?? 2.6;

    // floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(lengthM, widthM), matsRef.current.floor);
    floor.rotation.x = -Math.PI / 2;
    roomGroup.add(floor);

    // walls
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

    // ✅ measurement grid with origin at prototype position
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
  }, [spatial, measureOrigin]);

  /* ---------- LOAD PAD ---------- */
  useEffect(() => {
    if (padRef.current.ready) return;

    setStatus((s) => (s.includes("pad_2") ? s : "Loading pad_2.stl…"));
    const loader = new STLLoader();
    console.log("[Pad] loading:", PAD_URL);

    loader.load(
      PAD_URL,
      (geom) => {
        const upright = orientGeometryUpright(geom);
        const { geom: prepared, scale } = groundCenterAndScale(upright, 1.0);
        padRef.current.geom = prepared;
        padRef.current.baseScale = scale;
        padRef.current.ready = true;

        setPadReadyTick((t) => t + 1);
        setStatus("pad_2.stl loaded ✅");
      },
      undefined,
      (err) => {
        console.error("[Pad] load failed ❌", err);
        setStatus(`FAILED to load pad_2.stl. Check DevTools > Network if ${PAD_URL} is 404.`);
      }
    );
  }, []);

  /* ---------- LOAD PROTOTYPE (optional) ---------- */
  useEffect(() => {
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

    const loader = new STLLoader();
    console.log("[Prototype] loading:", PROTOTYPE_URL);

    loader.load(
      PROTOTYPE_URL,
      (geom) => {
        const upright = orientGeometryUpright(geom);
        const { geom: prepared, scale } = groundCenterAndScale(upright, 1.8);

        const mesh = new THREE.Mesh(prepared, matsRef.current.proto);
        mesh.scale.setScalar(scale);

        protoGroup.clear();
        protoGroup.add(mesh);

        protoRef.current.mesh = mesh;
        protoRef.current.loaded = true;

        setProtoReadyTick((t) => t + 1);
      },
      undefined,
      (err) => {
        console.error("[Prototype] load failed ❌", err);
        setStatus(`FAILED to load Prototype. Check DevTools > Network if ${PROTOTYPE_URL} is 404.`);
      }
    );
  }, []);

  /* ---------- BUILD PADS ---------- */
  useEffect(() => {
    const { padsGroup, camera, controls } = threeRef.current;
    if (!padsGroup || !camera || !controls) return;

    padsGroup.clear();
    glowPadsRef.current = [];

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

    const lengthM = spatial?.lengthM ?? 3;
    const widthM = spatial?.widthM ?? 3;

    const margin = 0.18;
    const halfL = lengthM / 2 - margin;
    const halfW = widthM / 2 - margin;

    const maxDistCm =
      Math.max(
        ...rows.map((r) => toNumber(getField(r, "Ultrasonic", "Distance", "Ultrasonic(cm)", "UTV")) ?? 0)
      ) || 0;

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
      const baseMat =
        cls.includes("hot")
          ? matsRef.current.hot
          : cls.includes("dead")
          ? matsRef.current.dead
          : matsRef.current.neutral;

      const mat = baseMat.clone();
      mat.transparent = false;
      mat.opacity = 1;

      const padMesh = new THREE.Mesh(padRef.current.geom.clone(), mat);
      const finalScale = padRef.current.baseScale * PAD_WORLD_SIZE;
      padMesh.scale.setScalar(finalScale);

      padMesh.position.set(x, y, z);
      padMesh.userData = { row, index, glowPhase: Math.random() * Math.PI * 2 };

      padsGroup.add(padMesh);
      glowPadsRef.current.push(padMesh);
    });

    // prototype to centroid
    const c = count ? centroid.multiplyScalar(1 / count) : new THREE.Vector3(0, 0, 0);
    const px = THREE.MathUtils.clamp(c.x, -halfL + 0.2, halfL - 0.2);
    const pz = THREE.MathUtils.clamp(c.z, -halfW + 0.2, halfW - 0.2);

    if (protoRef.current.mesh) protoRef.current.mesh.position.set(px, 0, pz);
    else if (protoRef.current.fallbackBox) protoRef.current.fallbackBox.position.set(px, 0.125, pz);

    // ✅ measurement must start at prototype position
    setMeasureOrigin({ x: px, z: pz });

    // camera framing
    const roomWidth = east - west + 0.6;
    const roomDepth = north - south + 0.6;
    const cx = (east + west) / 2;
    const cz = (north + south) / 2;

    const maxDim = Math.max(roomWidth, roomDepth, 3);
    camera.position.set(cx, maxDim * 0.9, cz + maxDim * 1.3);
    controls.target.set(cx, 1.1, cz);
    controls.update();

    setStatus(`Deployed ✅ ${rows.length} pads`);
  }, [rowsFor3D, spatial, padReadyTick, protoReadyTick]);

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
          maxWidth: 360,
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
