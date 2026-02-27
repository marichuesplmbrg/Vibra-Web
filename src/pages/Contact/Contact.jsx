import "./Contact.css";
import { useEffect, useState } from "react";

const SCRIPT_URL = "https://docs.google.com/spreadsheets/d/15EzmUf5PyGhI88RAx5znaZDTGuw_GUc4OMXKJS_A2Pk/edit?gid=0#gid=0";

export default function Contact() {
  const [animate, setAnimate] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState({ type: "", text: "" }); // type: success | error | loading
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  function isEmailValid(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();

    if (!n || !em || !msg) {
      setStatus({ type: "error", text: "Please fill out Name, Email, and Message." });
      return;
    }
    if (!isEmailValid(em)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "loading", text: "Sending..." });

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: n, email: em, message: msg }),
      });

      // Some deployments return 200 with JSON; handle both JSON and non-JSON safely
      let payload = null;
      const text = await res.text();
      try {
        payload = JSON.parse(text);
      } catch {
        payload = { ok: res.ok };
      }

      if (!res.ok || !payload?.ok) {
        throw new Error(payload?.error || "Failed to send message.");
      }

      setStatus({ type: "success", text: "Message sent! Thanks for reaching out." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        text:
          "Could not send. If this keeps happening, check the Apps Script deployment access (Anyone) and the URL.",
      });
      console.error(err);
    } finally {
      setSubmitting(false);
      // auto-hide status after a bit
      setTimeout(() => setStatus({ type: "", text: "" }), 3500);
    }
  }

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

      {/* Status toast (doesn't take space in the form layout) */}
      {status.text && (
        <div className={`contact-toast ${status.type}`}>
          {status.text}
        </div>
      )}

      <form className="contact-form" onSubmit={onSubmit}>
        <div className="contact-field">
          <label>NAME</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className="contact-field">
          <label>EMAIL</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            autoComplete="email"
          />
        </div>

        <div className="contact-field">
          <label>MESSAGE</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows={6}
          />
        </div>

        <button className="contact-btn" type="submit" disabled={submitting}>
          {submitting ? "SENDING..." : "SEND"}
        </button>
      </form>
    </div>
  );
}