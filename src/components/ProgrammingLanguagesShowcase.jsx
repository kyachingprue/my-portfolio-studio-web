import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Code2,
  Brain,
  Globe,
  Server,
  Laptop2,
} from "lucide-react";

const LANGUAGES = [
  {
    key: "c",
    name: "C",
    icon: Cpu,
    color: "from-gray-500 to-gray-700",
    use: "Operating systems, embedded systems, hardware-level programming",
    explanation:
      "C is a low-level programming language that works very close to hardware. It teaches memory management, performance optimization, and how computers actually work.",
    life:
      "Used in operating systems, device drivers, microcontrollers, and performance-critical systems like IoT devices.",
  },
  {
    key: "cpp",
    name: "C++",
    icon: Code2,
    color: "from-blue-500 to-indigo-600",
    use: "Game engines, high-performance software, real-time systems",
    explanation:
      "C++ extends C with object-oriented programming. It balances performance with abstraction, making it ideal for complex and fast applications.",
    life:
      "Used in game development, 3D engines, browsers, finance systems, and real-time simulations.",
  },
  {
    key: "csharp",
    name: "C#",
    icon: Laptop2,
    color: "from-purple-500 to-violet-600",
    use: ".NET applications, enterprise software, desktop & web apps",
    explanation:
      "C# is a modern, strongly-typed language focused on productivity, security, and scalable application development.",
    life:
      "Used in enterprise systems, ASP.NET web apps, Windows software, and Unity game development.",
  },
  {
    key: "java",
    name: "Java",
    icon: Server,
    color: "from-orange-500 to-red-600",
    use: "Backend systems, Android apps, large-scale enterprise platforms",
    explanation:
      "Java follows the 'write once, run anywhere' philosophy. It is stable, scalable, and widely used for backend and enterprise systems.",
    life:
      "Used in banking systems, Android apps, large enterprise servers, and cloud-based applications.",
  },
  {
    key: "javascript",
    name: "JavaScript",
    icon: Globe,
    color: "from-yellow-400 to-amber-500",
    use: "Web applications, frontend & backend (Node.js)",
    explanation:
      "JavaScript powers the web. It allows dynamic UI, real-time interaction, and full-stack development with modern frameworks.",
    life:
      "Used in websites, dashboards, mobile apps, APIs, real-time chat apps, and SaaS platforms.",
  },
  {
    key: "python",
    name: "Python",
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    use: "AI, data science, automation, backend services",
    explanation:
      "Python emphasizes simplicity and readability. It enables fast development and powerful integrations with AI and data tools.",
    life:
      "Used in AI/ML, data analysis, automation scripts, backend APIs, and scientific computing.",
  },
];

export default function ProgrammingLanguagesShowcase() {
  const [active, setActive] = useState(LANGUAGES[0]);
  const ActiveIcon = active.icon;

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
            Programming Languages & Real-World Thinking
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            These languages are not just tools — they shape how modern software,
            systems, and intelligent applications are built in real life.
          </p>
        </motion.div>

        {/* Language Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {LANGUAGES.map((lang) => {
            const Icon = lang.icon;
            return (
              <motion.button
                key={lang.key}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(lang)}
                className={`rounded-2xl p-4 border transition ${active.key === lang.key
                    ? "bg-white/10 border-indigo-500"
                    : "bg-white/5 border-white/10 hover:border-indigo-500/50"
                  }`}
              >
                <div
                  className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-linear-to-br ${lang.color} flex items-center justify-center`}
                >
                  <Icon className="text-white w-5 h-5" />
                </div>
                <p className="text-sm text-gray-200 font-medium text-center">
                  {lang.name}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${active.color} flex items-center justify-center`}
              >
                <ActiveIcon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {active.name}
              </h3>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-indigo-400 font-medium">
                  How it works:
                </span>{" "}
                {active.explanation}
              </p>
              <p>
                <span className="text-indigo-400 font-medium">
                  Where it’s used:
                </span>{" "}
                {active.use}
              </p>
              <p>
                <span className="text-indigo-400 font-medium">
                  Impact in real life:
                </span>{" "}
                {active.life}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
