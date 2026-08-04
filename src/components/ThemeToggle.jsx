import { useEffect, useState } from "react";

export function ThemeToggle({ className }) {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then fallback to system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Apply the class
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  // Listen for SYSTEM theme changes (Browser/OS)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only auto-switch if the user hasn't manually set a preference yet
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    // <button
    //   onClick={() => setIsDark(!isDark)}
    //   className="px-4 py-2 rounded-md bg-gray-200 dark:bg-slate-950 transition-colors"
    // >
    //   Switch to {isDark ? "Light" : "Dark"} Mode
    // </button>

    <label
      className={`relative 
      w-10 h-6 mr-1.5!
      md:w-12 md:h-7
      lg:w-14 lg:h-8 
      rounded-full bg-[#d4d9de] cursor-pointer transition-all duration-300 ${className}`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={() => setIsDark(!isDark)}
      />
      <div
        className="absolute top-1 left-1 
        w-4 h-4 
        md:w-5 md:h-5 
        lg:w-6 lg:h-6 
        peer-checked:translate-x-4
        md:peer-checked:translate-x-5
        lg:peer-checked:translate-x-6
        rounded-full transition-all duration-300 bg-[#e0e5ec] shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]"
      ></div>
    </label>
  );
}
