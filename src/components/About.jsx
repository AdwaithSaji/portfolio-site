import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <p className="max-w-3xl text-gray-400 leading-relaxed">
        I am a 3rd-year Computer Science and Engineering student at Karunya
        Institute of Science and Technology with a strong focus on DevOps and
        IoT/Embedded Systems. I enjoy solving real-world problems by integrating
        software and hardware systems. My interests include automation,
        cloud-based workflows, and building efficient, scalable systems.
      </p>
    </section>
  );
}

export default About;