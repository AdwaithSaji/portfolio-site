import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 md:px-20 text-white"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-center text-center"
        >
          {/* IMAGE */}
          <motion.img
            src="/images/profile.jpeg"
            alt="Adwaith"
            whileHover={{ scale: 1.06 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-52 h-52 rounded-full object-cover border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)] mb-6"
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-sm"
          >
            Passionate about DevOps, AI, and IoT.  
            Always building, learning, and solving real-world problems.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-8 leading-tight"
          >
            Let’s <span className="text-purple-400">Connect</span>
          </motion.h2>

          {/* CONTACT INFO */}
          <div className="space-y-5 mb-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:adwaith0363@gmail.com?subject=Opportunity%20from%20Portfolio"
                className="text-lg text-purple-400 hover:underline"
              >
                adwaith0363@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-400 text-sm">Phone</p>
              <a
                href="tel:+918089867566"
                className="text-lg text-purple-400 hover:underline"
              >
                +91 8089867566
              </a>
            </motion.div>

          </div>

          {/* BUTTON */}
          <motion.a
            href="mailto:adwaith0363@gmail.com?subject=Opportunity%20from%20Portfolio"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-fit px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition"
          >
            Get in Touch
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;