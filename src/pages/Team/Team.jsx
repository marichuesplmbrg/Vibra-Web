import "./Team.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import marichu from "/Users/marichuespelimbergo/vibra-web/src/assets/images/marichu.png";
import missy from "/Users/marichuespelimbergo/vibra-web/src/assets/images/missy.png";
import khlowee from "/Users/marichuespelimbergo/vibra-web/src/assets/images/khlowee.png";
import juliann from "/Users/marichuespelimbergo/vibra-web/src/assets/images/juliann.png";
import lance from "/Users/marichuespelimbergo/vibra-web/src/assets/images/lance.png";

const members = [
  { name: "Marichu C. Espelimbergo", role: "Frontend Developer", image: marichu },
  { name: "Missy Ann Jhlezshir G. Espiritu", role: "UI/UX Designer", image: missy },
  { name: "Khlowee A. Mendoza", role: "Assistant Backend Developer", image: khlowee },
  { name: "Juliann Vincent B. Quibral", role: "Backend Developer", image: juliann },
  { name: "Lance Gabrielle A. Santos", role: "Assistant Frontend Developer", image: lance },
];

export default function Team() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`team-container ${animate ? "enter" : ""}`}>
      <h1 className="team-title">OUR TEAM</h1>
      <h3 className="team-subtitle">MEET THE DEVELOPERS</h3>

      <div className="team-grid">
        {members.map((m, idx) => (
          <div className="team-member" key={idx}>
            <div className="flip-card">
              <div className="flip-inner">
                <div
                  className="flip-front"
                  style={{ backgroundImage: `url(${m.image})` }}
                />

                <div className="flip-back">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="team-cta-down">
        <button
          className="team-cta-btn"
          type="button"
          onClick={() => navigate("/simulation")}
          aria-label="Continue to simulation"
        >
          <span className="team-cta-arrow">→</span>
          <span className="team-cta-text">Continue to Simulation</span>
        </button>
      </div>
    </div>
  );
}