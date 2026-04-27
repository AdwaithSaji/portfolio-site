import { motion } from "framer-motion";

function WhyMe() {
  return (
    <section
      id="why"
      className="px-6 md:px-24 py-32 text-white"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white">
  Why Me
</h2>

        {/* PARAGRAPH 1 */}
        <p className="text-gray-400 leading-relaxed mb-6">
          I focus on building systems that are not just functional, but scalable
          and efficient. My approach combines DevOps practices with IoT and
          embedded systems to create solutions that work reliably in real-world
          environments.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-gray-400 leading-relaxed mb-6">
          I enjoy working at the intersection of software and hardware,
          designing systems that integrate automation, infrastructure, and
          intelligent decision-making. My goal is to build solutions that are
          practical, impactful, and production-ready.
        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-gray-400 leading-relaxed">
          I am constantly learning and adapting, with a strong focus on
          improving system performance, reliability, and scalability. I believe
          in building with purpose, not just completing projects.
        </p>

      </motion.div>

    </section>
  );
}

export default WhyMe;