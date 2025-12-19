import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  User,
  Code2,
} from "lucide-react";
import { useEffect, useState } from "react";

const technologies = [
  {
    name: "MERN Stack Architecture",
    description:
      "Scalable full-stack architecture using MongoDB, Express, React, and Node.js.",
  },
  {
    name: "React Performance Optimization",
    description:
      "Code splitting, memoization, lazy loading, and efficient state management.",
  },
  {
    name: "Secure Authentication System",
    description:
      "JWT, Firebase Authentication, role-based authorization, and protected routes.",
  },
  {
    name: "Advanced Data Fetching",
    description:
      "Axios + TanStack Query for caching, background refetching, and performance.",
  },
  {
    name: "Stripe Payment Integration",
    description:
      "Secure online payment system with real-time status handling.",
  },
];

export default function ContactMe() {
  const [activeTech, setActiveTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-linear-to-br from-black to-slate-700 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-slate-300">
            Let’s connect and build something powerful together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="text-indigo-400" />
              <span className="font-medium">Kachingprue Marma</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-indigo-400" />
              <a
                href="kyachingpruemarma.info@gmail.com"
                className="hover:text-indigo-400 transition"
              >
                Kyachingpruemarma.info@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Github className="text-indigo-400" />
              <a
                href="https://github.com/kyachingprue?tab=repositories"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                https://github.com/kyachingprue?tab=repositories
              </a>
            </div>

            {/* <div className="flex items-center gap-3">
              <Linkedin className="text-indigo-400" />
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                linkedin.com/in/yourprofile
              </a>
            </div> */}

            <div className="flex row items-center gap-3">
              <Facebook className="text-indigo-400" />
              <a
                href="https://www.facebook.com/kyaching.prue.marma.2025"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                https://www.facebook.com/kyachingprue
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – ADVANCED DYNAMIC LOGIC */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-indigo-400" />
            <h3 className="text-xl font-semibold">
              Advanced Technologies I Use
            </h3>
          </div>

          <motion.div
            key={activeTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-bold text-indigo-400">
              {technologies[activeTech].name}
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {technologies[activeTech].description}
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="mt-6 flex gap-2">
            {technologies.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${activeTech === index
                    ? "bg-indigo-400 scale-125"
                    : "bg-slate-500"
                  }`}
              ></span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
