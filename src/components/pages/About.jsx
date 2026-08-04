import React from "react";
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

const About = () => {
  return (
    <>
      <section className="lg:min-h-screen! md:min-h-[60vh]! flex! flex-col! md:flex-row! items-center! justify-between! gap-12! px-6! lg:py-16! max-w-5xl! mx-auto!">
        {/* Left: The Image Area */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* The Purple Glow (Dark Mode) */}
          <div className="absolute! inset-0! bg-green-600! dark:bg-purple-600! rounded-full! blur-3xl! opacity-20! dark:opacity-40! animate-pulse!"></div>
          <div className="relative! z-10! w-full! h-full! rounded-4xl! border-8! border-emerald-500! dark:border-purple-500! overflow-hidden! bg-slate-100! dark:bg-slate-800!">
            <img
              src="/your-photo.jpg"
              alt="Sebastin"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: The Text Area */}
        <div className="flex-1! space-y-6!">
          <div className="text-center! lg:text-left! p-0! m-0!">
            <span className="text-teal-600! dark:text-purple-600! font-mono! tracking-widest! text-xl! text-center! lg:text-left! uppercase! mb-2!">
              Hello!!!
            </span>
          </div>

          <h1 className="text-4xl! md:text-5xl! font-bold! text-slate-900 text-center! lg:text-left! dark:text-white">
            I’m Sebastin, a developer crafting{" "}
            <span className="text-teal-600! dark:text-purple-600!">
              digital solutions.
            </span>
          </h1>
          <div className="text-lg! text-slate-600! dark:text-slate-300! leading-relaxed! space-y-4!">
            <p className="text-center lg:text-left">
              I'm a Computer Science student currently obsessed with the
              JavaScript ecosystem. I don't just write code; I enjoy
              architecture and the logic behind efficient apps.
            </p>
            <p className="text-center lg:text-left">
              When I'm not in front of a screen, you'll probably find me
              exploring new music or learning about emerging tech trends.
            </p>
          </div>
        </div>
      </section>
      <div className="hidden lg:p-2.5 lg:mb-3.5! lg:grid lg:grid-cols-5 lg:gap-24 lg:max-w-1/2 lg:self-center lg:justify-self-center">
        <SiTypescript color="#3178C6" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiGo color="#00ADD8" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiReact color="#61dafb" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiNextdotjs className="w-16 h-16 lg:w-24 lg:h-24 text-slate-900 dark:text-white" />
        <SiTailwindcss color="#06b6d4" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiVitest color="#6e9f18" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiStorybook color="#ff4785" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiChromatic color="#fc521f" className="w-16 h-16 lg:w-24 lg:h-24" />
        <SiGithubactions
          color="#2088ff"
          className="w-16 h-16 lg:w-24 lg:h-24"
        />
        <SiGit color="#f05032" className="w-16 h-16 lg:w-24 lg:h-24" />
      </div>
    </>
  );
};

export default About;
