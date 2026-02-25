import "./Instruction.css";

export default function Instruction() {
  return (
    <div className="inst-page">
      <h1 className="inst-title">INSTRUCTION</h1>
      <h3 className="inst-subtitle">HOW TO USE VIBRA</h3>

      <div className="inst-grid">

        {/* LEFT CARD - PROTOTYPE */}
        <div className="inst-card">
          <h2 className="card-heading">PROTOTYPE</h2>

          <ol className="inst-list">
            <li>Power on the prototype device.</li>
            <li>Place the device at the center of the room.</li>
            <li>Rotate the device 360° to scan the environment.</li>
            <li>Allow sensors to collect dB, distance, and RT60 data.</li>
            <li>Ensure measurements are stable before recording.</li>
            <li>Export or upload the gathered data.</li>
          </ol>
        </div>

        {/* RIGHT CARD - WEB APPLICATION */}
        <div className="inst-card">
          <h2 className="card-heading">WEB APPLICATION</h2>

          <ol className="inst-list">
            <li>Go to the SIMULATION page.</li>
            <li>Import data (Cloud or Local).</li>
            <li>Verify Angle, dB, Ultrasonic, RT60 values.</li>
            <li>Select classification (Hotspot/Deadspot/Neutral).</li>
            <li>Click DEPLOY to map the data.</li>
            <li>Review recommendations and apply treatments.</li>
          </ol>
        </div>

      </div>
    </div>
  );
}