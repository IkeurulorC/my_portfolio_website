import React from "react";
import logo from "../assets/logo.svg";
import { ThemeToggle } from "./ThemeToggle";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";

const Header = () => {
  return (
    <header className=" fixed!  top-0 w-full z-50 transition-all duration-30 bg-emerald-600/80 dark:bg-slate-950/80 dark:backdrop-blur-md border-b border-white/10">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center gap-4"
        >
          <div className="ml-1.5! h-12 w-12 flex items-center justify-center rounded-xl bg-linear-to-br from-white/10 to-transparent border border-white/20 shadow-xl">
            <img src={logo} alt="personal logo" className="" />
          </div>
          <span className="text-lg lg:text-xl font-bold bg-linear-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Ikeurulor Sebastin Chiagoziem
          </span>
          <ThemeToggle className="md:hidden" />
        </motion.div>
        <NavBar />
        <ThemeToggle className="hidden md:inline-block" />
      </div>
    </header>
  );
};

export default Header;
