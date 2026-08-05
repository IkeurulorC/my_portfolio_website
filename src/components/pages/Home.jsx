import React from "react";
import HeroSection from "../HeroSection";
import MobileHero from "../MobileHero";
import EmailButton from "../EmailButton";
import {
  SiTypescript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStorybook,
  SiGithubactions,
  SiVitest,
  SiChromatic,
  SiGit,
} from "@icons-pack/react-simple-icons";

const Home = () => {
  return (
    <>
      <div className="relative z-20 flex flex-col items-center justify-center min-h-dvh px-6 text-center">
         {" "}
        {/* Wrapper to constrain width so dots are visible on the left/right */}
         {" "}
        <div className="max-w-xl mt-16! sm:mt-0! pt-1.5! sm:pt-0! space-y-6">
                 {" "}
          <span className="text-lg md:text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                  Frontend <span className="text-purple-500">Developer</span> 
             {" "}
          </span>
             {" "}
          <p className="text-lg md:text-3xl text-slate-300 leading-relaxed">
                  Specializing in{" "}
            <span className="text-purple-400 font-medium">React</span> and{" "}
            <span className="text-purple-400 font-medium"> Tailwind CSS</span>{" "}
            to build immersive, high-performance web interfaces.   {" "}
          </p>
              <EmailButton>Get In Touch</EmailButton> {" "}
        </div>
        <div className="lg:hidden pb-5! sm:pb-0! mt-3.5! grid grid-cols-2 gap-12 max-w-1/2 self-center justify-self-center">
          <SiTypescript color="#3178C6" className="w-16 h-16 lg:w-24 lg:h-24" />
          <SiGo color="#00ADD8" className="w-16 h-16 lg:w-24 lg:h-24" />
          <SiReact color="#61dafb" className="w-16 h-16 lg:w-24 lg:h-24" />
          <SiNextdotjs className="w-16 h-16 lg:w-24 lg:h-24 text-slate-900 dark:text-white" />
          <SiTailwindcss
            color="#06b6d4"
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
          <SiVitest color="#6e9f18" className="w-16 h-16 lg:w-24 lg:h-24" />
          <SiStorybook color="#ff4785" className="w-16 h-16 lg:w-24 lg:h-24" />
          <SiChromatic color="#fc521f" className="w-16 h-16 lg:w-24 lg:h-24" />
          <SiGithubactions
            color="#2088ff"
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
          <SiGit color="#f05032" className="w-16 h-16 lg:w-24 lg:h-24" />
        </div>
      </div>
      <HeroSection className="hidden md:flex" />
      {/* <MobileHero className="flex md:hidden" /> */}
    </>
  );
};

export default Home;
