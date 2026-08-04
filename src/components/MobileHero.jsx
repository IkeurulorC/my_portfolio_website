import React from "react";

const MobileHero = ({ className }) => {
  const columns = 80; // Horizontal density
  const rows = 20; // Vertical density
  const radius = 200; // How "fat" the cylinder is

  return (
    <div
      className={`${className} relative flex items-center justify-center perspective-distant`}
    >
      <div
        className="relative w-full h-[50vh] transform-3d animate-slow-rotate"
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

export default MobileHero;
