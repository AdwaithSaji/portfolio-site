import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-24 text-white"
    >
      <div className="max-w-4xl">

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Adwaith Sajikumar
        </motion.h1>

        {/* DOMAIN */}
        <p className="text-xl text-purple-400 mt-4 font-medium">
          DevOps | IoT | Embedded Systems
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
          I engineer scalable automation pipelines and intelligent embedded systems,
          building production-ready solutions that solve real-world problems.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">

          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-2 bg-purple-600 text-sm rounded-lg hover:bg-purple-700 transition"
          >
            View Projects
          </a>

          {/* Resume Placeholder */}
          <button
            className="px-6 py-2 border border-white/20 text-sm rounded-lg hover:border-purple-400 hover:text-purple-400 transition"
          >
            Resume (Coming Soon)
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;