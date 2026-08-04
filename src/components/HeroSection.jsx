import React from "react";

const HeroSection = ({ className }) => {
  const columns = 80; // Horizontal density
  const rows = 20; // Vertical density
  const radius = 400; // How "fat" the cylinder is

  return (
    <div
      className={`${className} fixed inset-0 flex items-center justify-center perspective-distant`}
    >
      <div
        className="relative w-full h-full transform-3d animate-slow-rotate"
        style={{ transform: "rotateX(-15deg) rotateY(0deg)" }}
      >
        {Array.from({ length: columns }).map((_, i) =>
          Array.from({ length: rows }).map((_, j) => {
            const angle = (i / columns) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (j - rows / 2) * 40; // Spacing between rows

            return (
              <div
                key={`${i}-${j}`}
                className="absolute w-1 h-1
                dark:bg-lime-400 bg-purple-800 
                rounded-full shadow-[0_0_8px_#6e11b0]"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                  // Fade dots in the back for realism
                  opacity: z < 0 ? 0.2 : 0.8,
                }}
              />
            );
          }),
        )}
      </div>
    </div>
  );
};

export default HeroSection;

//   return (
//     <section
//       className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden
//                         bg-white text-gray-900 // Light mode defaults
//                         dark:bg-slate-900 dark:text-gray-100 // Dark mode slate background, light text
//                         transition-colors duration-500 ease-in-out"
//     >
//       {/* Background Effect (Subtle for dark mode, can be hidden in light mode) */}
//       <div className="absolute inset-0 z-0 opacity-20 dark:opacity-50 transition-opacity duration-500 ease-in-out">
//         {/* You can replace this with a more complex SVG pattern or animated gradient */}
//         <svg
//           className="absolute inset-0 h-full w-full"
//           fill="none"
//           viewBox="0 0 100 100"
//         >
//           <defs>
//             <pattern
//               id="dot-pattern"
//               width="8"
//               height="8"
//               patternUnits="userSpaceOnUse"
//             >
//               <circle
//                 cx="4"
//                 cy="4"
//                 r="1"
//                 fill="#6B7280"
//                 className="dark:fill-purple-600 transition-colors duration-500 ease-in-out"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dot-pattern)" />
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in">
//         {/* Main Headline */}
//         <h1
//           className="text-5xl md:text-7xl font-bold leading-tight
//                        text-slate-800 // Light mode text
//                        dark:text-white // Dark mode text
//                        drop-shadow-lg // Adds a slight shadow for depth
//                        transition-colors duration-500 ease-in-out"
//         >
//           Building Digital Experiences
//         </h1>

//         {/* Sub-headline */}
//         <p
//           className="text-lg md:text-xl font-light
//                       text-gray-600 // Light mode text
//                       dark:text-slate-300 // Dark mode lighter text
//                       mt-6 mb-8 transition-colors duration-500 ease-in-out"
//         >
//           Full-stack developer specializing in{" "}
//           <span className="font-semibold text-purple-700 dark:text-purple-400">
//             React
//           </span>
//           ,{" "}
//           <span className="font-semibold text-purple-700 dark:text-purple-400">
//             Node.js
//           </span>
//           , and scalable web solutions.
//         </p>

//         {/* Call to Action Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
//           <a
//             href="#projects" // Link to your projects section
//             className="px-8 py-3 rounded-full text-lg font-semibold
//                        bg-purple-600 text-white hover:bg-purple-700 // Light mode primary button
//                        dark:bg-purple-700 dark:hover:bg-purple-600 // Dark mode primary button with purple
//                        focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800
//                        transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
//           >
//             View My Work
//           </a>

//           <a
//             href="/path/to/your/resume.pdf" // Update with actual path to your resume
//             download // Prompts download
//             className="px-8 py-3 rounded-full text-lg font-semibold
//                        border border-gray-400 text-gray-800 hover:border-gray-600 hover:text-gray-900 // Light mode secondary button
//                        dark:border-slate-500 dark:text-slate-200 dark:hover:border-slate-400 dark:hover:text-white // Dark mode secondary button
//                        bg-transparent
//                        focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-slate-700
//                        transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
