<section className="lg:min-h-[70%]! min-h-[50vh] flex! flex-col! md:flex-row! items-center! justify-between! gap-12! px-6! pt-24! pb-16! max-w-5xl! mx-auto!">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className=" bg-[#111827]/50! backdrop-blur-sm! z-20! flex! items-center! justify-center! p-4!"
  >
    <div className="bg-white! dark:bg-gray-800! rounded-xl! shadow-xl! w-full! min-w-[70vh]! p-6!">
      <div>
        <fieldset className="border-2! border-solid! border-[#17b2e6] p-2!">
          <legend className="text-2xl! font-bold! text-gray-300">
            Get In Touch
          </legend>
          <form className="space-y-4!">
            <div>
              <label
                className="block! text-sm! font-medium! text-gray-300! mb-1! ml-1.5!"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full! px-4! py-2! border! border-gray-600! rounded-lg! focus:ring-2! focus:ring-violet-500! bg-gray-700!"
              />
            </div>
            <div>
              <label
                className="block! text-sm! font-medium! text-gray-300! mb-1! ml-1.5!"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full! px-4! py-2! border! border-gray-600! rounded-lg! focus:ring-2! focus:ring-violet-500! bg-gray-700!"
              />
            </div>
            <div>
              <label
                className="block! text-sm! font-medium! text-gray-300! mb-1! ml-1.5!"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows="4"
                id="message"
                placeholder="How can I help you?"
                className="w-full! px-4! py-2! border! border-gray-600! rounded-lg! focus:ring-2! focus:ring-violet-500! bg-gray-700!"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 1.02 }}
              className="w-full px-4! py-2! 
                bg-linear-to-r from-violet-600 hover:from-violet-700 to-violet-400  hover:to-purple-700 
                transition-all duration-300 rounded-lg! shadow-md hover:shadow-lg hover:shadow-violet-600/50!"
            >
              Send Message
            </motion.button>
          </form>
        </fieldset>
      </div>
    </div>
  </motion.div>
</section>;
