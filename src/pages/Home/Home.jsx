import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="home-container" key={location.key}>
      <h1 className="main-title">VIBRA</h1>
      <h2 className="subtitle">STUDIO SIMULATION</h2>

      <button
        className="primary-btn"
        onClick={() => navigate("/about")}
      >
        <span className="btn-text">LEARN MORE ABOUT US</span>
        <span className="btn-arrow">→</span>
      </button>
    </div>
  );
}