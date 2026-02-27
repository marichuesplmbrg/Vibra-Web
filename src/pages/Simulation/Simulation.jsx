import { useEffect, useMemo, useState } from "react";
import "./Simulation.css";

import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";

// ✅ Prototype URL (make sure filename is correct in src/assets)
const prototypeUrl = new URL(
  "../../assets/Prototype-stripped.stl",
  import.meta.url
).href;

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
  // Works with "0", "0°", " 90 ", etc.
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
   SPATIAL (LAYER 1 ONLY)
   LengthCm = U(0) + U(180)
   WidthCm  = U(90) + U(270)
========================= */
const normalizeDeg = (deg) => {
  if (deg == null) return null;
  return ((deg % 360) + 360) % 360;
};

const snapCardinal = (deg, tol = 3) => {
  if (deg == null) return null;
  const d = normalizeDeg(deg);
  const cardinals = [0, 90, 180, 270];

  let best = null;
  let bestDiff = Infinity;

  for (const c of cardinals) {
    const diff = Math.min(Math.abs(d - c), 360 - Math.abs(d - c));
    if (diff < bestDiff) {
      bestDiff = diff;
      best = c;
    }
  }
  return bestDiff <= tol ? best : null;
};

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

  // ✅ rows shown on table (filters + search)
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

  // ✅ SPATIAL: use ONLY Layer 1 ultrasonic angles for L/W
  const spatial = useMemo(() => {
    const layer1 = rawRows.filter((r) => norm(r.Layer) === norm("Layer 1"));

    const buckets = { 0: [], 90: [], 180: [], 270: [] };

    for (const r of layer1) {
      const snapped = snapCardinal(toNumber(r.Angle), 3);
      if (snapped == null) continue;

      const cm = toNumber(r.Ultrasonic);
      if (cm != null) buckets[snapped].push(cm);
    }

    // First value found at each cardinal angle (Layer 1)
    const u0 = buckets[0][0] ?? null;
    const u180 = buckets[180][0] ?? null;
    const u90 = buckets[90][0] ?? null;
    const u270 = buckets[270][0] ?? null;

    // ✅ EXACT RULES:
    const lengthCm = u0 != null && u180 != null ? u0 + u180 : null;
    const widthCm = u90 != null && u270 != null ? u90 + u270 : null;

    // Height: first available (cm)
    const hRow = rawRows.find((r) => String(r.HeightRaw ?? "").trim() !== "") || null;
    const heightRaw = hRow?.HeightRaw ?? "";

    // Area in m²
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
      // optional: for debugging
      debug: { u0, u180, u90, u270 },
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
        <Slide2 rowsFor3D={deployedRows} spatial={spatial} prototypeUrl={prototypeUrl} />
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