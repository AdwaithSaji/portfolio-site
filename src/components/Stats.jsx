import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Stats() {
  const stats = [
    {
      value: 5,
      label: "Live Projects",
      details: [
        "Traffic Violation Detection",
        "AI IoT Fog Computing",
        "Smart IoT Locker",
      ],
    },
    {
      value: 4,
      label: "Internships",
      details: [
        "DevOps Team Lead",
        "CI/CD Automation",
      ],
    },
    {
      value: 10,
      label: "Certifications",
      details: [
        "Linux",
        "Networking",
        "DevOps Basics",
      ],
    },
    {
      value: 3,
      label: "Years in Engineering",
      details: [
        "Embedded Systems",
        "Automation",
        "System Design",
      ],
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const [active, setActive] = useState(null);

  return (
    <section ref={ref} className="px-6 md:px-24 py-40 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-semibold mb-20">
          Experience & Growth
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 cursor-pointer"
              animate={{
                scale: active === index ? 1.05 : 1,
              }}
            >

              {/* NUMBER */}
              <h3 className="text-6xl font-semibold">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                  />
                )}
                +
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {stat.label}
              </p>

              {/* EXPAND DETAILS */}
              <motion.div
                initial={false}
                animate={{
                  height: active === index ? "auto" : 0,
                  opacity: active === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-4 text-left"
              >
                <div className="space-y-2 text-xs text-gray-300">
                  {stat.details.map((item, i) => (
                    <p key={i}>• {item}</p>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;