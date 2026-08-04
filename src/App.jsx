import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import ResponsiveLayout from "./components/ResponsiveLayout";

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* Mobile & Tablet (< lg): Single-Page Continuous Scroll */}
      <div className="block lg:hidden pt-16 md:pt-20">
        <ResponsiveLayout />
      </div>

      {/* Desktop (>= lg): React Router Page Routes */}
      <div className="hidden lg:block pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
