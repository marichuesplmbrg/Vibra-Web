import { useEffect, useRef, useState } from "react";
import "./Slide1.css";

/* =========================
   GOOGLE SHEET
========================= */
const SHEET_ID = "1OAfQI6MwheL6wIes1EhGjak3G1jSVLFGppmzqTL9MWQ";

const LAYER_SHEETS = [
  { label: "Layer 1", gid: "0" },
  { label: "Layer 2", gid: "540291160" },
  { label: "Layer 3", gid: "1597351297" },
  { label: "Layer 4", gid: "1962364642" },
];

const sheetCsvUrl = (gid) =>
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;

/* =========================
   HELPERS
========================= */
const norm = (v) =>
  String(v ?? "")
    .replace(/\uFEFF/g, "")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase();

function parseCSV(text) {
  const str = String(text).replace(/\r/g, "");
  const rows = [];

  let row = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const next = str[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === "," && !inQuotes) {
      row.push(cur);
      cur = "";
      continue;
    }

    if (ch === "\n" && !inQuotes) {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
      continue;
    }

    cur += ch;
  }

  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }

  if (!rows.length) return [];

  const headers = rows[0].map((h) => norm(h));
  const out = [];

  for (let i = 1; i < rows.length; i++) {
    const cols = rows[i];
    if (cols.every((c) => norm(c) === "")) continue;

    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = String(cols[idx] ?? "").trim();
    });
    out.push(obj);
  }

  return out;
}

function getVal(row, keys) {
  for (const k of keys) {
    const nk = norm(k);
    if (Object.prototype.hasOwnProperty.call(row, nk)) return row[nk];
  }
  return "";
}

export default function Slide1({
  rawRows,
  setRawRows,
  displayedRows,
  searchInput,
  setSearchInput,
  setAppliedSearch,
  sortValue,
  setSortValue,
  onExport,
  onDeploy,
  onReset,
  spatial,
  uploadStatus,
  setUploadStatus,
}) {
  const [showImport, setShowImport] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (uploadStatus.type === "idle") return;
    const timer = setTimeout(() => setUploadStatus({ type: "idle", message: "" }), 5000);
    return () => clearTimeout(timer);
  }, [uploadStatus, setUploadStatus]);

  const handleImportCloud = async () => {
    try {
      setUploadStatus({
        type: "loading",
        message: "Uploading data from Google Sheet (all layers)...",
      });

      const allRows = [];

      for (const layer of LAYER_SHEETS) {
        const res = await fetch(sheetCsvUrl(layer.gid), { redirect: "follow" });
        const text = await res.text();

        if (text.toLowerCase().includes("<html") || text.toLowerCase().includes("<!doctype")) {
          throw new Error(`Sheet ${layer.label} is not publicly accessible as CSV.`);
        }

        const sheetRows = parseCSV(text);

        const cleaned = sheetRows.map((r) => ({
          Angle: getVal(r, ["angle"]),
          Decibel: getVal(r, ["db", "dB", "decibel"]),
          Ultrasonic: getVal(r, ["utv", "ultrasonic", "ultrasonicvalue"]),
          RT60: getVal(r, ["rt60", "reverberation", "rt60value"]),
          Classification: getVal(r, ["class", "classification"]),
          Layer: layer.label,

          LengthRaw: getVal(r, ["length"]),
          WidthRaw: getVal(r, ["width"]),
          HeightRaw: getVal(r, ["utvh", "height", "heightraw"]),
        }));

        allRows.push(...cleaned);
      }

      if (!allRows.length) throw new Error("No data found from all sheets.");

      setRawRows(allRows);

      setUploadStatus({
        type: "success",
        message: `Done uploading. Loaded ${allRows.length} row(s) from all layers.`,
      });

      setShowImport(false);
      setShowSort(false);
    } catch (e) {
      console.error("Cloud import failed:", e);
      setUploadStatus({
        type: "error",
        message: `Upload failed: ${String(e.message || e)}`,
      });
      setShowImport(false);
      setShowSort(false);
    }
  };

  const handleImportLocal = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setUploadStatus({ type: "error", message: "CSV only. Please upload a .csv file." });
      event.target.value = "";
      return;
    }

    setUploadStatus({ type: "loading", message: "Uploading data from local CSV..." });

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const rows = parseCSV(String(text));
        if (!rows.length) throw new Error("CSV has no data rows.");

        const cleaned = rows.map((r) => ({
          Angle: getVal(r, ["angle"]),
          Decibel: getVal(r, ["db", "dB", "decibel"]),
          Ultrasonic: getVal(r, ["utv", "ultrasonic"]),
          RT60: getVal(r, ["rt60", "reverberation"]),
          HeightRaw: getVal(r, ["utvh", "height", "heightraw"]),
          Classification: getVal(r, ["class", "classification"]),
          Layer: getVal(r, ["layer"]) || "Local",
          LengthRaw: getVal(r, ["length"]),
          WidthRaw: getVal(r, ["width"]),
        }));

        setRawRows(cleaned);

        setUploadStatus({
          type: "success",
          message: `Done uploading. Loaded ${cleaned.length} row(s).`,
        });
      } catch (err) {
        setUploadStatus({
          type: "error",
          message: `Upload failed: ${String(err.message || err)}`,
        });
      }
    };

    reader.readAsText(file);
    setShowImport(false);
    setShowSort(false);
    event.target.value = "";
  };

  const applySearch = () => setAppliedSearch(searchInput);

  const chooseSort = (valueOrNull) => {
    setSortValue(valueOrNull);
    setShowSort(false);
  };

  const formatCm = (cm) => (cm == null ? "—" : `${cm.toFixed(1)} cm`);
  const formatArea = (a) => (a == null ? "—" : `${a.toFixed(2)} m²`);

  const statusText =
    spatial.qualified == null ? "—" : spatial.qualified ? "Qualified" : "Not Qualified";

  return (
    <div className="sim-slide sim-slide-1">
      <h1 className="sim-title">SIMULATION</h1>

      {uploadStatus.type !== "idle" && (
        <div className={`upload-toast upload-toast--floating ${uploadStatus.type}`}>
          {uploadStatus.message}
          <button
            className="upload-toast-close"
            type="button"
            onClick={() => setUploadStatus({ type: "idle", message: "" })}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}

      <div className="sim-row">
        {/* LEFT */}
        <div className="glass-card glass-card--raw">
          <h2 className="card-title">RAW PARAMETERS</h2>

          <div className="raw-top">
            <input
              className="search-input"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applySearch()}
            />

            <button className="small-btn" type="button" onClick={applySearch}>
              Enter
            </button>

            <div className="sort-wrapper">
              <button
                className="small-btn"
                type="button"
                onClick={() => {
                  setShowSort((v) => !v);
                  setShowImport(false);
                }}
              >
                Sort ▾
              </button>

              {showSort && (
                <div className="sort-dropdown">
                  <button type="button" onClick={() => chooseSort("layer:Layer 1")}>
                    Layer 1
                  </button>
                  <button type="button" onClick={() => chooseSort("layer:Layer 2")}>
                    Layer 2
                  </button>
                  <button type="button" onClick={() => chooseSort("layer:Layer 3")}>
                    Layer 3
                  </button>
                  <button type="button" onClick={() => chooseSort("layer:Layer 4")}>
                    Layer 4
                  </button>

                  <div className="sort-divider" />

                  <button type="button" onClick={() => chooseSort("class:hotspot")}>
                    Hot Spot
                  </button>
                  <button type="button" onClick={() => chooseSort("class:deadspot")}>
                    Dead Spot
                  </button>

                  <div className="sort-divider" />

                  <button type="button" onClick={() => chooseSort(null)}>
                    Clear Sort
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="data-box">
            <table className="raw-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Angle</th>
                  <th>Decibel</th>
                  <th>Ultrasonic</th>
                  <th>RT60</th>
                  <th>Classification</th>
                  <th>Layer</th>
                </tr>
              </thead>

              <tbody>
                {displayedRows.map((r, idx) => (
                  <tr key={`${r.Layer}-${idx}`}>
                    <td>{idx + 1}</td>
                    <td>{r.Angle}</td>
                    <td>{r.Decibel}</td>
                    <td>{r.Ultrasonic}</td>
                    <td>{r.RT60}</td>
                    <td>{r.Classification}</td>
                    <td>{r.Layer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="raw-bottom">
            <div className="left-actions">
              <div className="import-wrapper">
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => {
                    setShowImport((prev) => !prev);
                    setShowSort(false);
                  }}
                >
                  Import ▾
                </button>

                {showImport && (
                  <div className="import-dropdown">
                    <button type="button" onClick={handleImportCloud}>
                      Cloud
                    </button>
                    <button type="button" onClick={() => fileInputRef.current?.click()}>
                      Local
                    </button>
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept=".csv"
                  onChange={handleImportLocal}
                />
              </div>

              <button className="action-btn" type="button" onClick={onExport} disabled={!displayedRows.length}>
                Export
              </button>

              <button className="action-btn" type="button" onClick={onDeploy} disabled={!displayedRows.length}>
                Deploy
              </button>
            </div>

            <button className="action-btn" type="button" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="glass-card glass-card--spatial">
          <h2 className="card-title">SPATIAL STATUS</h2>

          <p className="label">PHYSICAL DIMENSION:</p>

          <div className="dimension-input">
            <span className="dimension-text">Length: {formatCm(spatial.lengthCm)}</span>
          </div>

          <div className="dimension-input">
            <span className="dimension-text">Width: {formatCm(spatial.widthCm)}</span>
          </div>

          <div className="dimension-input">
            <span className="dimension-text">
              Height: {spatial.heightRaw ? `${spatial.heightRaw} cm` : "—"}
            </span>
          </div>

          <div className="status-wrapper">
            <p className="status-label">STATUS:</p>

            <div className="status-box">
              <div className="status-inner">
                <div className="status-line">
                  <span>Area:</span> <b>{formatArea(spatial.area)}</b>
                </div>
                <div className="status-line">
                  <span>Result:</span> <b>{statusText}</b>
                </div>
                <div className="status-hint">
                  Qualified if floor area is <b>3–5 m²</b>.
                </div>
              </div>
            </div>
          </div>

          <div className="spatial-meta">
            Active rows: <b>{displayedRows.length}</b> / {rawRows.length}
            {sortValue ? (
              <>
                {" "}
                • Filter: <b>{sortValue}</b>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}