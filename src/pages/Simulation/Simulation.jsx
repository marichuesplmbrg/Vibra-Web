import { useEffect, useMemo, useState } from "react";
import "./Simulation.css";

import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";

/* =========================
   HELPERS
========================= */
const norm = (v) =>
  String(v ?? "")
    .replace(/\uFEFF/g, "")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase();

function toNumber(value) {
  const n = Number(String(value ?? "").replace(/[^\d.\-]/g, ""));
  return Number.isFinite(n) ? n : null;
}

function downloadCSV(filename, rows) {
  if (!rows?.length) return;

  const headers = Object.keys(rows[0] || {});
  const escape = (v) => {
    const s = String(v ?? "");
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => escape(r[h])).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* =========================
   SPATIAL (FALLBACK ACROSS LAYERS)
   LengthCm = U(0) + U(180)
   WidthCm  = U(90) + U(271)
========================= */
const normalizeDeg = (deg) => {
  if (deg == null) return null;
  return ((deg % 360) + 360) % 360;
};

const snapToTargets = (deg, targets, tol = 3) => {
  if (deg == null) return null;
  const d = normalizeDeg(deg);

  let best = null;
  let bestDiff = Infinity;

  for (const t of targets) {
    const diff = Math.min(Math.abs(d - t), 360 - Math.abs(d - t));
    if (diff < bestDiff) {
      bestDiff = diff;
      best = t;
    }
  }
  return bestDiff <= tol ? best : null;
};

function pickUltrasonicWithFallback(allRows, targetAngle, tol = 3) {
  const priorityLayers = ["Layer 1", "Layer 2", "Layer 3", "Layer 4"];
  const targets = [0, 90, 180, 271];

  for (const layer of priorityLayers) {
    const layerRows = allRows.filter((r) => norm(r.Layer) === norm(layer));

    for (const r of layerRows) {
      const a = toNumber(r.Angle);
      const snapped = snapToTargets(a, targets, tol);
      if (snapped !== targetAngle) continue;

      const cm = toNumber(r.Ultrasonic);
      if (cm != null) return { value: cm, fromLayer: layer };
    }
  }

  return { value: null, fromLayer: "" };
}

export default function Simulation() {
  const slides = useMemo(() => [0, 1], []);
  const [slide, setSlide] = useState(0);

  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);

  const [rawRows, setRawRows] = useState([]);
  const [deployedRows, setDeployedRows] = useState([]);

  const [uploadStatus, setUploadStatus] = useState({
    type: "idle",
    message: "",
  });

  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [sortValue, setSortValue] = useState(null);

  const displayedRows = useMemo(() => {
    let rows = [...rawRows];

    if (sortValue) {
      const [kind, val] = String(sortValue).split(":");
      if (kind === "layer") rows = rows.filter((r) => norm(r.Layer) === norm(val));
      if (kind === "class") {
        const target = norm(val).replace(/[\s\-]+/g, "");
        rows = rows.filter(
          (r) => norm(String(r.Classification)).replace(/[\s\-]+/g, "") === target
        );
      }
    }

    if (appliedSearch.trim()) {
      const q = norm(appliedSearch);
      rows = rows.filter((r) => Object.values(r).some((v) => norm(v).includes(q)));
    }

    return rows;
  }, [rawRows, appliedSearch, sortValue]);

  const spatial = useMemo(() => {
    const p0 = pickUltrasonicWithFallback(rawRows, 0, 3);
    const p180 = pickUltrasonicWithFallback(rawRows, 180, 3);
    const p90 = pickUltrasonicWithFallback(rawRows, 90, 3);
    const p271 = pickUltrasonicWithFallback(rawRows, 271, 3);

    const u0 = p0.value;
    const u180 = p180.value;
    const u90 = p90.value;
    const u271 = p271.value;

    const lengthCm = u0 != null && u180 != null ? u0 + u180 : null;
    const widthCm = u90 != null && u271 != null ? u90 + u271 : null;

    const hRow = rawRows.find((r) => String(r.HeightRaw ?? "").trim() !== "") || null;
    const heightRaw = hRow?.HeightRaw ?? "";

    const lengthM = lengthCm == null ? null : lengthCm / 100;
    const widthM = widthCm == null ? null : widthCm / 100;
    const area = lengthM != null && widthM != null ? lengthM * widthM : null;
    const qualified = area != null ? area >= 3 && area <= 5 : null;

    return {
      lengthCm,
      widthCm,
      heightRaw,
      area,
      qualified,
      debug: {
        u0,
        u0From: p0.fromLayer,
        u180,
        u180From: p180.fromLayer,
        u90,
        u90From: p90.fromLayer,
        u271,
        u271From: p271.fromLayer,
      },
    };
  }, [rawRows]);

  const goPrev = () => setSlide((s) => Math.max(0, s - 1));
  const goNext = () => setSlide((s) => Math.min(slides.length - 1, s + 1));

  const resetAll = () => {
    setRawRows([]);
    setDeployedRows([]);
    setSearchInput("");
    setAppliedSearch("");
    setSortValue(null);
    setUploadStatus({ type: "idle", message: "" });
    setSlide(0);
  };

  // ✅ ALWAYS deploy (qualified OR not)
  const deploy = () => {
    setDeployedRows(displayedRows);
    setSlide(1);
  };

  const exportDisplayed = () => downloadCSV("vibra_raw_parameters.csv", displayedRows);

  return (
    <div className={`simulation-page ${animate ? "enter" : ""}`}>
      {slide === 0 ? (
        <Slide1
          rawRows={rawRows}
          setRawRows={setRawRows}
          displayedRows={displayedRows}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setAppliedSearch={setAppliedSearch}
          sortValue={sortValue}
          setSortValue={setSortValue}
          onExport={exportDisplayed}
          onDeploy={deploy}
          onReset={resetAll}
          spatial={spatial}
          uploadStatus={uploadStatus}
          setUploadStatus={setUploadStatus}
        />
      ) : (
        <Slide2 rowsFor3D={deployedRows} spatial={spatial} />
      )}

      <div className="sim-controls">
        <button className="sim-arrow" onClick={goPrev} disabled={slide === 0}>
          ‹
        </button>

        <div className="sim-dots">
          {slides.map((_, i) => (
            <span key={i} className={`sim-dot ${i === slide ? "on" : ""}`} />
          ))}
        </div>

        <button className="sim-arrow" onClick={goNext} disabled={slide === slides.length - 1}>
          ›
        </button>
      </div>
    </div>
  );
}