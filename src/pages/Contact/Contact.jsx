import "./Contact.css";
import { useEffect, useState } from "react";

export default function Contact() {
  const [animate, setAnimate] = useState(false);

 useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`contact-page ${animate ? "enter" : ""}`}>
      <h1 className="contact-title">CONTACT US</h1>
      <h3 className="contact-subtitle">GET IN TOUCH</h3>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-label">EMAIL</div>
          <div className="contact-value">vibra.project@email.com</div>
        </div>

        <div className="contact-card">
          <div className="contact-label">SCHOOL</div>
          <div className="contact-value">Technological Institute of the Philippines</div>
        </div>

        <div className="contact-card">
          <div className="contact-label">LOCATION</div>
          <div className="contact-value">Quezon City, Philippines</div>
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-field">
          <label>NAME</label>
          <input placeholder="Your name" />
        </div>

        <div className="contact-field">
          <label>EMAIL</label>
          <input placeholder="Your email" />
        </div>

        <div className="contact-field">
          <label>MESSAGE</label>
          <textarea placeholder="Your message..." rows={6} />
        </div>

        <button className="contact-btn">SEND</button>
      </div>
    </div>
  );
}