import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

export default function About() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`about-container ${animate ? "enter" : ""}`}>
      <h1>ABOUT US</h1>
      <h3>WE ARE VIBRA</h3>

      <div className="about-content">

        {/* LEFT SIDE - TEXT */}
        <div className="about-text">

          <p className="about-paragraph p1">
            <span className="para-inner">
              VIBRA is a web-based studio simulation platform designed to visualize and analyze acoustic 
              data through an interactive three-dimensional environment. It bridges real-world sound 
              measurements and digital visualization, allowing users to better understand how sound 
              behaves within enclosed spaces.
            </span>
          </p>

          <p className="about-paragraph p2">
            <span className="para-inner">
              The platform gathers acoustic parameters such as RT60 values and spatial measurements 
              from a physical prototype and transforms them into meaningful visual representations. 
              Through its integrated 3D simulation, users can identify acoustic conditions including hot 
              spots, dead spots, and neutral zones within a room.
            </span>
          </p>

          <p className="about-paragraph p3">
            <span className="para-inner">
              VIBRA aims to support students, engineers, and designers by providing a clear and intuitive 
              way to evaluate room acoustics, explore data-driven insights, and improve sound 
              optimization decisions. By combining data analysis with immersive visualization, VIBRA 
              delivers a modern approach to acoustic assessment and simulation.
            </span>
          </p>

        </div>

        {/* RIGHT SIDE - CTA BUTTON */}
        <div className="about-cta-side">
          <button
            className="about-cta-btn"
            onClick={() => navigate("/team")}
            aria-label="Meet the developers"
          >
            <span className="cta-arrow">→</span>
            <span className="cta-text">Meet the developers</span>
          </button>
        </div>

      </div>
    </div>
  );
}