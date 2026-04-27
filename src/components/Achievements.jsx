import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Achievements() {
  const baseItems = [
    {
      title: "Recognition & Certification",
      desc: "Awarded for technical excellence and project contributions.",
      image: "/images/achievement-certificate.jpeg",
    },
    {
      title: "Workshop Leadership",
      desc: "Conducted hands-on sessions on emerging technologies and IoT systems.",
      image: "/images/workshop-speaking.jpeg",
    },
    {
      title: "Technical Environment",
      desc: "Actively working in lab environments solving real-world engineering problems.",
      image: "/images/lab-working.jpeg",
    },
    {
      title: "Professional Interaction",
      desc: "Engaging with mentors and faculty on academic and technical initiatives.",
      image: "/images/professional-meeting.jpeg",
    },
    {
      title: "Team & IEEE Activities",
      desc: "Collaborating and leading within IEEE Computer Society initiatives.",
      image: "/images/team-ieee.jpeg",
    },
  ];

  // Duplicate items for infinite effect
  const achievements = [...baseItems, ...baseItems];

  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls, isHovered]);

  return (
    <section className="py-24 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold mb-12">Achievements</h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex gap-6"
        >
          {achievements.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400 transition"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* LEFT ARROW */}
        <button
          onClick={() => controls.start({ x: "+=300" })}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
        >
          ◀
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => controls.start({ x: "-=300" })}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default Achievements;