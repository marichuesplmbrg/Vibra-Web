import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Simulation from "./pages/Simulation/Simulation";
import Instruction from "./pages/Instruction/Instruction";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Router basename="/Vibra-Web">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}