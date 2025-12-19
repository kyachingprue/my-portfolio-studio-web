import { motion } from "motion/react";
import {
  Code2,
  Layers3,
  Brain,
  Database,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Programming & Problem Solving",
    desc: "Strong foundation in JavaScript programming, clean code practices, reusable components, logical problem-solving, and performance-focused development.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Layers3,
    title: "MERN Stack Web Development",
    desc: "End-to-end MERN stack applications using React, Node.js, Express, and MongoDB with authentication, REST APIs, Stripe payments, and scalable architecture.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Database,
    title: "Modern Technology & Tools",
    desc: "Experience with Tailwind CSS, DaisyUI, Axios, TanStack Query, Firebase Auth, JWT, Git, GitHub, Vercel deployment, and responsive UI systems.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "AI & Smart Feature Integration",
    desc: "Building AI-ready applications with intelligent workflows, API-driven logic, automation concepts, and future integration with ML & AI-powered services.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Best Practices",
    desc: "Secure authentication, protected routes, role-based access, environment variables, CORS handling, and safe API communication.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Rocket,
    title: "Performance & Scalability",
    desc: "Optimized frontend performance, lazy loading, clean state management, reusable UI components, and scalable backend structure.",
    color: "from-fuchsia-500 to-purple-700",
  },
];

export default function AdvancedFeatures() {
  return (
    <section className="py-20 px-4 bg-linear-to-br from-black via-slate-950 to-indigo-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Advanced Development Capabilities
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Beyond projects, these are the core skills and advanced features I
            apply while building modern, scalable, and future-ready web
            applications.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 hover:border-indigo-500/50 transition"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
