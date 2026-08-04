import { useState, useEffect, useRef } from "react";
import "./projects.css";
import bassUiDocs from "../../assets/bass-ui-kit.svg";
import bassUiCard from "../../assets/analytics-dashboard.svg";
import bassUiConv from "../../assets/bass-ui-conv.svg";
import goWeatherSvg from "../../assets/sun-cli.svg";
import vanillaLab from "../../assets/vanilla.svg";
import solenor from "../../assets/solenor.svg";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";

const quantity = 7;
const zero = 0;
const segmentAngle = 360 / quantity;
const SENSITIVITY = 5;

const projectDetails = [
  {
    title: "Data-driven Dashboard",
    description:
      "Built with Bass UI Kit. A real-time analytics dashboard with asset grids, metrics tracking, and dark mode design.",
    link: "https://bass-ui-kit-data-driven-dashboard-ten.vercel.app/",
  },
  {
    title: "Bass UI Kit",
    description:
      "A React UI component library built with Tailwind, Radix primitives, and Class Variance Authority.",
    link: "https://bass-ui-kit-docs.vercel.app/",
  },
  {
    title: "Go Weather CLI",
    description:
      "A fast CLI application written in Go for quick weather reports and real-time forecasts.",
    link: "https://github.com/IkeurulorC/GO_WEATHER_CLI",
  },
  {
    title: "Vanilla Lab",
    description:
      "My early front-end projects. A collection of simple single-page projects built with vanilla css and js.",
    link: "https://ikeurulorc.github.io/Vanilla_CSS_JS_Projects/",
  },
  {
    title: "Currency Converter",
    description:
      "Built with Bass UI Kit. A simple accessible interface for performing currency conversions.",
    link: "https://currency-converter-dashboard.vercel.app/",
  },
  {
    title: "Solenor",
    description:
      "A modern luxury retail platform built with dynamic layout primitives and seamless interaction design.",
    link: "#", // Replace with your live/repo link
  },
  {
    title: " ",
    description: " ",
    link: "#",
  },
];

const Projects = () => {
  const rotation = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Unsubscribe when component unmounts
    const unsubscribe = rotation.on("change", (latestRotation) => {
      // 1. Calculate how many full or partial segment rotations have occurred
      const rawIndex = Math.round(latestRotation / segmentAngle);

      // 2. Wrap the index within 0..6 (quantity - 1) using normalized modulo
      // Since rotating clockwise decrements/increments rawIndex, modulo ensures infinite looping safety
      const normalizedIndex = ((rawIndex % quantity) + quantity) % quantity;

      setActiveIndex(normalizedIndex);
    });

    return () => unsubscribe();
  }, [rotation]);

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);

    startX.current = e.clientX;
    startRotation.current = rotation.get(); // Get the current value from your MotionValue
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX.current;
    const newRotation = startRotation.current + deltaX / SENSITIVITY;

    rotation.set(newRotation);
  };

  const handlePointerUp = () => {
    setIsDragging(false);

    const itemAngle = 360 / quantity;
    const currentRotation = rotation.get();

    // The Snap Math
    const closestIndex = Math.round(currentRotation / itemAngle);
    const targetAngle = closestIndex * itemAngle;

    animate(rotation, targetAngle, {
      type: "spring",
      stiffness: 260,
      damping: 20,
    });
  };
  const counterClockwise = () => {
    setRotation((prev) => prev + segmentAngle);
  };

  const clockwise = () => {
    setRotation((prev) =>
      prev == 0 ? 360 - segmentAngle : prev - segmentAngle,
    );
  };

  return (
    <>
      <div className="banner" style={{ overflow: "hidden" }}>
        <motion.div
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerMove={handlePointerMove}
          className="slider"
          initial={{ rotateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
            delay: 0,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            "--quantity": `${quantity}`,
            transformStyle: "preserve-3d",
            transformPerspective: "1000px",
            rotateY: rotation,
          }}
          onDragEnd={(event, info) => {
            const itemAngle = 360 / items.length;
            const currentRotation = rotationY.get();
            const nearestAngle =
              Math.round(currentRotation / itemAngle) * itemAngle;

            // Smoothly animate to the nearest snap point
            dragX.set(nearestAngle * 5);
          }}
        >
          <div
            key="one"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 0}` }}
          >
            <img src={bassUiDocs} alt="personal logo" className="z-10" />
          </div>
          <div
            key="two"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 1}` }}
          >
            <img src={bassUiCard} alt="personal logo" className="z-10" />
          </div>
          <div
            key="three"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 2}` }}
          >
            {/* Responsive scaling text size */}
            <h1 className="font-semibold! text-6xl md:text-9xl! hidden!">
              {3}
            </h1>
          </div>
          <div
            key="four"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 3}` }}
          >
            <img src={solenor} alt="personal logo" className="z-10" />
          </div>
          <div
            key="five"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 4}` }}
          >
            <img src={bassUiConv} alt="personal logo" className="z-10" />
          </div>
          <div
            key="six"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 5}` }}
          >
            <img src={vanillaLab} alt="personal logo" className="z-10" />
          </div>
          <div
            key="seven"
            className="item flex items-center justify-center "
            style={{ "--position": `${zero + 6}` }}
          >
            <img src={goWeatherSvg} alt="personal logo" className="z-10" />
          </div>
        </motion.div>

        <div className="absolute top-[50%] md:top-3/5 lg:hidden lg:relative flex justify-center pb-10">
          <div className="flex flex-col justify-center items-center max-w-11/12 md:max-w-5/10 mt-0 px-5! lg:px-11! py-2! md:py-3! text-gray-950! dark:text-white text-sm md:text-base rounded-md! md:rounded-xl lg:rounded-4xl! transition-all shadow-lg shadow-purple-500/20 mx-2!">
            <h3 className="text-3xl! font-semibold! mb-5!">
              {" "}
              {projectDetails[activeIndex].title}
            </h3>
            <p className="text-lg text-center">
              {projectDetails[activeIndex].description}
            </p>
            <span className="mt-4! inline-flex! items-center! gap-2! px-5! py-2! text-sm! font-medium! text-slate-200! bg-slate-800/80! hover:bg-purple-900/40! hover:text-purple-300! border! border-slate-700/80! hover:border-purple-500/50! rounded-lg! backdrop-blur-sm! transition-all! duration-200! shadow-sm!">
              <a
                href={projectDetails[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Demo
                <span className="text-purple-400"> →</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:top-4/5 lg:relative lg:flex justify-center pb-10">
        <div className="flex flex-col justify-center items-center max-w-11/12 md:max-w-5/10 mt-0 px-5! lg:px-11! py-2! md:py-3! text-sm md:text-base dark:text-white! text-gray-950! rounded-md! md:rounded-xl lg:rounded-4xl! transition-all shadow-lg shadow-purple-500/20 mx-2!">
          <h3 className="text-3xl! font-semibold! mb-5!">
            {" "}
            {projectDetails[activeIndex].title}
          </h3>
          <p className="text-lg text-center">
            {projectDetails[activeIndex].description}
          </p>
          <span className="mt-4! inline-flex! items-center! gap-2! px-5! py-2! text-sm! font-medium! text-slate-800! dark:text-slate-200! bg-slate-100 dark:bg-slate-800/80! hover:scale-105 dark:hover:scale-100 dark:hover:bg-purple-900/40!  dark:hover:text-purple-300! border! border-slate-700/80! dark:hover:border-purple-500/50! rounded-lg! backdrop-blur-sm! transition-all! duration-200! shadow-sm!">
            <a
              href={projectDetails[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Demo
              <span className="dark:text-purple-400 text-teal-400"> →</span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Projects;
