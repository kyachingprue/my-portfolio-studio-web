import { motion } from "motion/react";
import { ArrowRight, Code, Database, Server } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white">

      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-indigo-600/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 -right-32 w-125 h-125 bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-white/10 text-sm backdrop-blur">
            <Code size={16} /> MERN Stack Web Developer
          </span>

          <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight">
            Building <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Powerful
            </span>{" "}
            & Scalable <br />
            Web Applications
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            I’m a passionate MERN Stack Developer focused on creating modern,
            high-performance, and secure web applications using React, Node.js,
            Express, MongoDB, and cutting-edge technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - TECH CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Tech Stack I Use
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <TechItem icon={<Code />} title="Frontend" desc="React, Tailwind, Vite" />
              <TechItem icon={<Server />} title="Backend" desc="Node.js, Express, REST API" />
              <TechItem icon={<Database />} title="Database" desc="MongoDB, Firebase" />
              <TechItem icon={<Code />} title="Tools" desc="Axios, TanStack Query, Git" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechItem = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-3 items-start">
      <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-300">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
