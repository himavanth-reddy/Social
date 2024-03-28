import { Routes, Route } from "react-router-dom";
import HomeShell from "./components/HomeShell";
//import Home from "./Home"; // Import your page components
//import About from "./About";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeShell />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
}
