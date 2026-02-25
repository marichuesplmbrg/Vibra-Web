import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.css"; // ✅ ADD THIS

export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}