import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./assets/styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:name" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
