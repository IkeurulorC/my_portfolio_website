import React from "react";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="lg:flex hidden gap-8">
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.7 + index * 0.2,
          }}
        >
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="relative z-50 text-gray-200! dark:hover:text-violet-600! hover:text-lime-300! font-medium transition-colors duration-300 group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-300 dark:bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default NavBar;
