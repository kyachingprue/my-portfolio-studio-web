import { motion } from "motion/react";
import {
  Calendar,
  Rocket,
  Code,
  Layers,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import { useEffect, useState } from "react";

const techStack = {
  frontend: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "DaisyUI",
    "Vite",
    "React",
    "Next.js",
    "TypeScript (Basic)",
    "React Icons",
    "Lucide React",
  ],
  stateData: ["API", "Axios", "TanStack Query / React Query"],
  backend: [
    "Node.js",
    "Express.js",
    "JWT Authentication",
    "CORS",
    "Dotenv",
  ],
  database: ["MongoDB"],
  services: [
    "Firebase Authentication & Authorization",
    "Firebase Frontend Deployment",
    "Stripe Payment Integration",
  ],
  tools: [
    "SweetAlert",
    "React Hot Toast",
    "Vercel Deployment",
    "Render Deployment",
  ],
};

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  useEffect(() => {
    const keys = Object.keys(techStack);
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % keys.length;
      setActiveCategory(keys[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-linear-to-br from-black via-purple-950 to-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide">
            Experience & Journey
          </h2>
          <p className="mt-4 text-purple-300 max-w-3xl mx-auto">
            A disciplined, consistent, and growth-driven programming journey
            built with daily practice, real projects, and modern full-stack
            technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-10">
          <TimelineItem
            icon={<Calendar />}
            title="February 16, 2024 — The Beginning"
            text="I officially started my programming journey on February 16, 2024. I began with HTML and CSS, learning the foundations of the web and building simple static layouts."
          />

          <TimelineItem
            icon={<Code />}
            title="JavaScript & Problem Solving"
            text="After mastering the basics of HTML and CSS, I practiced JavaScript extensively, focusing on logic building, DOM manipulation, and problem solving through daily coding."
          />

          <TimelineItem
            icon={<Rocket />}
            title="Programming Hero — Batch 10"
            text="I joined Programming Hero Batch 10, which transformed my learning approach. This is where my real journey began with structured learning, projects, deadlines, and discipline."
          />

          <TimelineItem
            icon={<Layers />}
            title="MERN Stack Mastery"
            text="I completed full-stack MERN development, building real-world applications with authentication, payments, role-based access, REST APIs, and scalable architecture."
          />

          <TimelineItem
            icon={<Server />}
            title="Daily Practice & Growth Mindset"
            text="I practice programming every single day. I continuously improve my skills by learning new tools, refactoring old code, fixing bugs, and building production-level applications."
          />
        </div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-purple-400" />
            <h3 className="text-2xl font-bold">
              Technologies I Work With
            </h3>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.keys(techStack).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === key
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-purple-300 hover:bg-purple-700/30"
                  }`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tech List */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {techStack[activeCategory].map((tech, index) => (
              <div
                key={index}
                className="bg-black/40 border border-purple-800/40 rounded-xl p-4 text-center font-medium hover:bg-purple-800/30 transition"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-5"
    >
      <div className="p-3 bg-purple-700/30 rounded-xl text-purple-300">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-purple-200/80 mt-1 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
