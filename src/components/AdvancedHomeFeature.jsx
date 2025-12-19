import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Layers3,
  Brain,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const FEATURES = {
  programming: {
    icon: Code2,
    title: "Programming Mindset",
    points: [
      "Clean and readable JavaScript logic",
      "Reusable component architecture",
      "Problem-solving driven development",
      "Performance-aware coding habits",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  mern: {
    icon: Layers3,
    title: "MERN Stack Architecture",
    points: [
      "React with scalable component design",
      "Node.js & Express REST APIs",
      "MongoDB schema & data modeling",
      "Authentication, JWT & role-based access",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  ai: {
    icon: Brain,
    title: "AI & Smart Features",
    points: [
      "API-driven intelligent workflows",
      "Automation-ready system design",
      "AI feature planning & integration mindset",
      "Future ML-powered enhancement strategy",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  performance: {
    icon: Rocket,
    title: "Performance & Scalability",
    points: [
      "Lazy loading & code splitting",
      "Optimized state management",
      "Secure & scalable backend logic",
      "Deployment-ready production setup",
    ],
    gradient: "from-orange-500 to-amber-600",
  },
};

export default function AdvancedHomeFeature() {
  const [active, setActive] = useState("programming");
  const ActiveIcon = FEATURES[active].icon;

  return (
    <section className="py-24 bg-linear-to-br from-black via-slate-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How I Build Modern Applications
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            This section demonstrates my programming logic, architectural
            thinking, and future-ready development approach.
          </p>
        </motion.div>

        {/* Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {Object.keys(FEATURES).map((key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full border transition ${active === key
                  ? "bg-indigo-600 text-white border-indigo-500"
                  : "bg-white/5 text-gray-300 border-white/10 hover:border-indigo-500/50"
                }`}
            >
              {FEATURES[key].title}
            </motion.button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${FEATURES[active].gradient} flex items-center justify-center`}
                >
                  <ActiveIcon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {FEATURES[active].title}
                </h3>
              </div>

              <ul className="space-y-4">
                {FEATURES[active].points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="text-indigo-400 w-5 h-5 shrink-0 mt-1" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
