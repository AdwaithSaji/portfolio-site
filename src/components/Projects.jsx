import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "FogAI — Intelligent IoT Architecture",
      domain: "AI & IoT",
      desc: "Real-time AI-powered fog computing system with ultra-low latency.",
      tech: "Python • Flask • AI Engine • IoT",
      report: "/reports/fogai-iot-architecture.pdf",
      details: [
        "Ultra-low latency (~3ms)",
        "Hybrid AI + rule-based system",
        "Handles multi-sensor industrial data",
        "Works even without network",
        "70% reduced cloud usage",
      ],
    },
    {
      title: "Human-Centered AI Control Panel (XAI)",
      domain: "AI & Explainable Systems",
      desc: "Explainable AI system enabling transparent decision-making in industrial automation.",
      tech: "Python • TensorFlow • LSTM • SHAP • IoT",
      report: "/reports/human-centered-ai-control-panel.pdf",
      details: [
        "Fatigue prediction (~94% accuracy)",
        "Explainable AI using SHAP & LIME",
        "Human-in-the-loop design",
        "Transparent decision visualization",
      ],
    },
    {
      title: "Sree Saaj — Microservices Platform",
      domain: "Cloud & DevOps",
      desc: "Production-level microservices event management system.",
      tech: "FastAPI • Docker • Kubernetes • PostgreSQL",
      report: "/reports/sree-saaj-microservices-platform.pdf",
      details: [
        "Distributed microservices architecture",
        "API Gateway system",
        "CI/CD using GitHub Actions",
        "Monitoring with Prometheus & Grafana",
      ],
    },
    {
      title: "ARGO Data Explorer",
      domain: "AI & Data Systems",
      desc: "LLM-powered ocean data platform with natural language querying.",
      tech: "Python • Streamlit • FAISS • LLM",
      report: null,
      details: [
        "RAG-based querying",
        "Natural language interface",
        "Geospatial visualization",
        "NOAA dataset integration",
      ],
    },
    {
      title: "Plastic Detection System",
      domain: "AI",
      desc: "AI-based system for detecting plastic waste.",
      tech: "Python • Deep Learning",
      report: "/reports/plastic-detection-system.pdf",
      details: [
        "Trained detection model",
        "Environmental use-case",
        "Dataset preprocessing",
      ],
    },
    {
      title: "Traffic Violation Detection",
      domain: "Computer Vision",
      desc: "Detects traffic violations using image processing.",
      tech: "Python • OpenCV",
      report: "/reports/traffic-violation-detection.pdf",
      details: [
        "Vehicle tracking",
        "Violation detection",
        "Real-time processing",
      ],
    },
    {
      title: "LiFi Smart Lock System",
      domain: "IoT",
      desc: "Secure lock system using light-based communication.",
      tech: "Arduino • Sensors",
      report: "/reports/lifi-smart-lock-system.pdf",
      details: [
        "Light-based communication",
        "Secure unlocking",
        "Embedded integration",
      ],
    },
    {
      title: "Online Coffee Shop",
      domain: "Web Dev",
      desc: "Full-stack coffee ordering system.",
      tech: "HTML • CSS • JavaScript",
      report: "/reports/online-coffee-shop.pdf",
      details: [
        "Responsive UI",
        "Cart system",
        "User interaction flow",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400 cursor-pointer transition"
            onClick={() => setActiveProject(project)}
          >
            <p className="text-xs text-purple-400 mb-2">
              {project.domain}
            </p>

            <h3 className="text-lg font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              {project.desc}
            </p>

            <p className="text-xs text-gray-500">
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-[#0f0f1a] p-6 rounded-2xl max-w-lg w-full border border-white/10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-purple-400 text-xs mb-2">
                {activeProject.domain}
              </p>

              <h3 className="text-xl font-bold mb-2">
                {activeProject.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {activeProject.desc}
              </p>

              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                {activeProject.details.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>

              <div className="flex gap-3">
                {activeProject.report ? (
                  <>
                    <a
                      href={activeProject.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 rounded-lg text-sm hover:bg-purple-700"
                    >
                      View Report
                    </a>

                    <a
                      href={activeProject.report}
                      download
                      className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-purple-400"
                    >
                      Download
                    </a>
                  </>
                ) : (
                  <button className="px-4 py-2 border border-white/10 text-gray-500 rounded-lg text-sm cursor-not-allowed">
                    Report Coming Soon
                  </button>
                )}
              </div>

              <button
                className="mt-6 text-xs text-gray-500 hover:text-white"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;