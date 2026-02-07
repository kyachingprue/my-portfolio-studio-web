import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  User,
  MapPin,
  Code2,
  Clock,
  Activity,
  Cpu,
  Brain,
} from "lucide-react";
import { useEffect, useState } from "react";
import ExtraFeature from "../components/ExtraFeature";
import ScientistNetwork from "../components/ScientistNetwork";
import ContactProgrammingCart from "../components/ContactProgrammingCart";

const techStack = [
  "MERN Stack",
  "Next.js",
  "Firebase Auth",
  "JWT Security",
  "Stripe Payment",
  "REST API",
  "TanStack Query",
  "Node.js",
  "Express.js",
  "Git & Github",
];

export default function Contact() {
  const [time, setTime] = useState(new Date());
  const [available, setAvailable] = useState(true);

  // 🔥 Live Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🔥 Auto availability toggle (demo logic)
  useEffect(() => {
    const toggle = setInterval(() => {
      setAvailable((prev) => !prev);
    }, 8000);
    return () => clearInterval(toggle);
  }, []);

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-slate-950 to-purple-950 text-white pt-10">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-pink-600/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT INFO (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Let’s Build Something <br />
                <span className="bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h2>
              <p className="mt-4 text-slate-300 max-w-lg">
                I’m a MERN Stack Developer passionate about building scalable,
                secure, and high-performance web applications.
              </p>
            </div>

            <div className="space-y-4">
              <Info icon={<User />} text="Kyachingprue Marma" />
              <Info icon={<Mail />} text="kyachingpruemarma.info@gmail.com" />
              <Info icon={<MapPin />} text="Bangladesh (Remote Friendly)" />
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4">
              <Social icon={<Github />} link="https://github.com/kyachingprue" />
              <Social
                icon={<Facebook />}
                link="https://www.facebook.com/kyaching.prue.marma.2025"
              />
              <Social icon={<Linkedin />} link="https://www.linkedin.com/in/kyachingpruemarma/" />
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="text-indigo-400" />
                <h4 className="font-semibold">Technologies I Work With</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur hover:bg-indigo-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 🔥 RIGHT SIDE – ADVANCED MODERN PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6"
          >
            <h3 className="text-2xl font-semibold">Developer Status</h3>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <Activity className={available ? "text-green-400" : "text-red-400"} />
              <span className="text-slate-300">
                Status:{" "}
                <span className={available ? "text-green-400" : "text-red-400"}>
                  {available ? "Available for Work" : "Currently Busy"}
                </span>
              </span>
            </div>

            {/* Live Time */}
            <div className="flex items-center gap-3">
              <Clock className="text-indigo-400" />
              <span className="text-slate-300">
                Local Time: {time.toLocaleTimeString()}
              </span>
            </div>

            {/* 🚀 ADVANCED DEVELOPER INSIGHTS */}
            <div className="pt-6 space-y-5">

              {/* Tech Stack */}
              <div>
                <p className="text-sm text-slate-400 mb-2">Current Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Tailwind", "JWT", "Firebase"].map(
                    (tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>

              {/* Coding Activity */}
              <div className="flex items-center gap-3">
                <Code2 className="text-purple-400" />
                <span className="text-slate-300">
                  Coding Mode:{" "}
                  <span className="text-purple-400 font-medium">
                    Deep Focus 🚀
                  </span>
                </span>
              </div>

              {/* System / Environment */}
              <div className="flex items-center gap-3">
                <Cpu className="text-cyan-400" />
                <span className="text-slate-300">
                  Environment:{" "}
                  <span className="text-cyan-400">MERN • Vite • VS Code</span>
                </span>
              </div>

              {/* Problem Solving */}
              <div className="flex items-center gap-3">
                <Brain className="text-pink-400" />
                <span className="text-slate-300">
                  Problem Solving:{" "}
                  <span className="text-pink-400">DSA + Real Projects</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ExtraFeature />
      <ScientistNetwork />
      <ContactProgrammingCart/>
   </div>
  );
}


const Info = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-slate-300">
    <span className="text-indigo-400">{icon}</span>
    <span>{text}</span>
  </div>
);

const Social = ({ icon, link }) => (
  <motion.a
    whileHover={{ y: -4 }}
    href={link}
    target="_blank"
    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 transition"
  >
    {icon}
  </motion.a>
);

const ActionButton = ({ icon, text, link }) => (
  <motion.a
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    href={link}
    target="_blank"
    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-linear-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 hover:bg-indigo-500/30 transition"
  >
    {icon}
    <span className="font-medium">{text}</span>
  </motion.a>
);
