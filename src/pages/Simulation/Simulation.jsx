import { useEffect, useMemo, useState } from "react";
import "./Simulation.css";

import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";

// ✅ Prototype URL (make sure filename is correct in src/assets)
const prototypeUrl = new URL(
  "../../assets/Prototype-stripped.stl",
  import.meta.url
).href;

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

function toMetersAssumeCm(val) {
  const n = toNumber(val);
  if (n == null) return null;
  return n / 100;
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
          (r) =>
            norm(String(r.Classification)).replace(/[\s\-]+/g, "") === target
        );
      }
    }

    if (appliedSearch.trim()) {
      const q = norm(appliedSearch);
      rows = rows.filter((r) =>
        Object.values(r).some((v) => norm(v).includes(q))
      );
    }

    return rows;
  }, [rawRows, appliedSearch, sortValue]);

  const spatial = useMemo(() => {
    const lwRow =
      rawRows.find(
        (r) =>
          String(r.LengthRaw ?? "").trim() !== "" ||
          String(r.WidthRaw ?? "").trim() !== ""
      ) || null;

    const hRow =
      rawRows.find((r) => String(r.HeightRaw ?? "").trim() !== "") || null;

    const lengthM = lwRow ? toMetersAssumeCm(lwRow.LengthRaw) : null;
    const widthM = lwRow ? toMetersAssumeCm(lwRow.WidthRaw) : null;
    const heightM = hRow ? toMetersAssumeCm(hRow.HeightRaw) : null;

    const area = lengthM != null && widthM != null ? lengthM * widthM : null;
    const qualified = area != null ? area >= 3 && area <= 5 : null;

    return {
      lengthM,
      widthM,
      heightM,
      heightRaw: hRow?.HeightRaw ?? "",
      area,
      qualified,
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

  // ✅ Snapshot EXACTLY what you see in the table
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
        <Slide2
          rowsFor3D={deployedRows}   // ✅ spheres = 1 per row
          spatial={spatial}
          prototypeUrl={prototypeUrl}
        />
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

        <button
          className="sim-arrow"
          onClick={goNext}
          disabled={slide === slides.length - 1}
        >
          ›
        </button>
      </div>
    </div>
  );
}