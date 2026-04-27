import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Git & GitHub",
    "Jenkins",
    "CI/CD",
    "Docker",
    "Linux",
    "Python",
    "Embedded C",
    "Java",
    "Raspberry Pi",
    "Sensors",
    "Networking",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 border border-purple-500/30 rounded-lg text-sm hover:bg-purple-500/10 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;