import React from "react";

export const Logo = () => {
  return (
    <div className="logo-shield-container p-12 ">
      <div className="relative">
        <div className="logo-gradient-shield blur-3xl rounded-full">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="cGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stop-color="var(--foreground)"
                  stop-opacity="0.7"
                />
                <stop
                  offset="100%"
                  stop-color="var(--foreground)"
                  stop-opacity="0.2"
                />
              </linearGradient>
            </defs>

            <path
              d="M 75,25 C 20,10 20,90 75,75 L 70,85 C 10,100 10,0 80,15 Z"
              fill="url(#cGradient)"
              stroke="rgba(255,255,255,0.3)"
              stroke-width="0.5"
            />

            <path
              d="M 70,30 C 30,20 30,80 70,70"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              stroke-width="1"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
