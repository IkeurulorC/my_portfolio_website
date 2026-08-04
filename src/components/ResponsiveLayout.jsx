import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const ResponsiveLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default ResponsiveLayout;
