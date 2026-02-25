import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/VibraLogo.png";


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="VIBRA Logo" className="navbar-logo" />
      </Link>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/team">TEAM</Link>
        <Link to="/simulation">SIMULATION</Link>
        <Link to="/instruction">INSTRUCTION</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}