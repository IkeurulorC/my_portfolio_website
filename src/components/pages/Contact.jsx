import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlSocialTwitter } from "react-icons/sl";
import {
  SiDiscord,
  SiGithub,
  SiHashnode,
} from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);

    formData.append("access_key", "80594fee-1ea6-4000-a998-d26ad2a58657");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        e.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="lg:min-h-[70%]! min-h-[50vh] flex! flex-col! md:flex-row! items-center! justify-between! lg:gap-12! px-6! lg:pt-24! lg:pb-16! max-w-5xl! mx-auto!">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full! min-w-full! backdrop-blur-sm! z-20! flex! items-center! justify-center! p-4!"
        >
          <div className="bg-white! dark:bg-gray-800! rounded-xl! w-full! min-w-full! p-6! shadow-2xl">
            <div>
              <fieldset className="border-2! border-solid! border-gray-700! dark:border-gray-300! p-2!">
                <legend className="text-2xl! font-bold! text-gray-800 dark:text-gray-300 mx-3!">
                  Get In Touch
                </legend>
                <form onSubmit={handleSubmit} className="space-y-4!">
                  <div>
                    <label
                      className="block! text-sm! font-semibold! text-gray-800! dark:text-gray-300! mb-1! ml-1.5!"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Your Name"
                      className="w-full! px-4! py-2! dark:border! dark:border-gray-600! rounded-lg! focus:ring-2! focus:ring-violet-500! bg-gray-200! dark:bg-gray-700!"
                    />
                  </div>
                  <div>
                    <label
                      className="block! text-sm! font-semibold! text-gray-800! dark:text-gray-300! mb-1! ml-1.5!"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Your Email"
                      className="w-full! px-4! py-2! dark:border! dark:border-gray-600! rounded-lg! focus:ring-2! focus:ring-violet-500! bg-gray-200! dark:bg-gray-700!"
                    />
                  </div>
                  <div>
                    <label
                      className="block! text-sm! font-semibold! text-gray-800! dark:text-gray-300! mb-1! ml-1.5!"
                      htmlFor="message"
                    >
                      Message:
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      required
                      placeholder="How can I help you?"
                      className="w-full! px-4! py-2! dark:border! dark:border-gray-600! rounded-lg! focus:ring-2! focus:ring-violet-500! bg-gray-200! dark:bg-gray-700!"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-4! py-2! 
                bg-linear-to-r from-emerald-600 dark:from-violet-600 hover:from-emerald-700 dark:hover:from-violet-700 to-emerald-400 dark:to-violet-400 hover:to-teal-700 dark:hover:to-indigo-700 
                transition-all duration-300 rounded-lg! shadow-md hover:shadow-sm"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                  {result && (
                    <p className="text-center text-sm font-semibold mt-2 text-emerald-500 dark:text-violet-400">
                      {result}
                    </p>
                  )}
                </form>
              </fieldset>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mb-0 h-20 lg:h-24 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <nav className="flex h-full items-center justify-around gap-4 p-4 md:px-8">
          {/* Twitter / X (#1DA1F2) */}
          <a
            href="https://x.com/CIkeurulor64690"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="hover:scale-110 hover:opacity-80 transition-all duration-200"
          >
            <SlSocialTwitter
              color="#1DA1F2"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
            />
          </a>

          {/* Discord (#5865F2) */}
          <a
            href="https://discord.com/users/sebastinurulor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord Profile"
            className="hover:scale-110 hover:opacity-80 transition-all duration-200"
          >
            <SiDiscord
              color="#5865F2"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
            />
          </a>

          {/* GitHub (Adapts using Tailwind fill or native dark mode class) */}
          <a
            href="https://github.com/IkeurulorC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:scale-110 hover:opacity-80 transition-all duration-200"
          >
            {/* For GitHub, using Tailwind fill utility works cleanly across modes */}
            <SiGithub className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 fill-slate-800 dark:fill-slate-100" />
          </a>

          {/* LinkedIn (#0A66C2) */}
          <a
            href="https://www.linkedin.com/in/sebastin-ikeurulor-467774357/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:scale-110 hover:opacity-80 transition-all duration-200"
          >
            <SiLinkedin
              color="#0A66C2"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
            />
          </a>

          {/* Hashnode (#2962FF) */}
          <a
            href="https://hashnode.com/@bass111"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode Blog"
            className="hover:scale-110 hover:opacity-80 transition-all duration-200"
          >
            <SiHashnode
              color="#2962FF"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
            />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Contact;
