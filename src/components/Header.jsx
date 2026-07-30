import React from "react";
import { motion } from "motion/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import LaserFlow from "./LaserFlow";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "I'm a Website Developer",
      "I'm a MERN Stack Developer",
      "I'm a Full Stack Developer",
      "I'm a Software Developer",
      "I'm a Programmer",
      "I'm a Coder"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <header className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-[#37066b] via-[#38103d] to-[#07152e]">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 w-full h-full md:h-240 lg:h-270 pointer-events-none will-change-transform">
        <LaserFlow
          horizontalSizing={2.5}
          verticalSizing={3.5}
          horizontalBeamOffset={0}
          verticalBeamOffset={0}
          fogIntensity={0.9}
          fogScale={0.6}
          flowStrength={0.5}
          wispIntensity={8}
        />
      </div>

      {/* Content */}
      <section className="relative z-10 min-h-screen flex items-center pt-12 sm:pt-4 lg:pt-10 ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col pt-8 md:pt-0 justify-center">
            {/* Small Intro Text */}
            <p className="text-green-400 font-medium tracking-[0.25em] uppercase mb-3 text-sm md:text-base">
              Hello, I'm
            </p>

            {/* Main Name */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight mb-4">
              <span className="bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Kyachingprue Marma
              </span>
            </h1>

            {/* Auto Writing Text */}
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">
                {text}
                <Cursor cursorColor="#22c55e" />
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-8 text-sm sm:text-base lg:text-lg max-w-3xl">
              Passionate{' '}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>{' '}
              focused on building modern, scalable, and high-performance web
              applications with clean user experiences. Specialized in{' '}
              <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
              <span className="text-cyan-400 font-semibold">Next.js</span>,{' '}
              <span className="text-cyan-400 font-semibold">TypeScript</span>,{' '}
              <span className="text-cyan-400 font-semibold">Node.js</span>,{' '}
              <span className="text-cyan-400 font-semibold">Express.js</span>,{' '}
              <span className="text-cyan-400 font-semibold">MongoDB</span>, and{' '}
              <span className="text-cyan-400 font-semibold">PostgreSQL</span> to
              create secure, responsive, and real-world digital solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <a
                href="https://www.facebook.com/kyaching.prue.marma.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-110 hover:shadow-cyan-400/60 hover:-translate-y-1">
                  <FaFacebookF className="transition-all duration-300 group-hover:text-cyan-300" />
                </div>
              </a>

              <a
                href="https://x.com/Kyachingprue369"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-blue-400/60 hover:-translate-y-1">
                  <FaTwitter className="transition-all duration-300 group-hover:text-blue-300" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kyachingpruemarma/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-indigo-400/60 hover:-translate-y-1">
                  <FaLinkedinIn className="transition-all duration-300 group-hover:text-indigo-300" />
                </div>
              </a>

              <a
                href="https://github.com/kyachingprue"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white text-xl shadow-lg shadow-gray-500/20 transition-all duration-300 hover:scale-110 hover:shadow-white/50 hover:-translate-y-1">
                  <FaGithub className="transition-all duration-300 group-hover:text-gray-300" />
                </div>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 justify-evenly md:justify-start lg:gap-4 mt-10">
              {/* View Projects Button */}
              <a
                href="/projects"
                className="group relative overflow-hidden px-4 lg:px-8 py-4 rounded-full font-semibold text-white bg-linear-to-r from-green-600 via-cyan-900 to-blue-700 shadow-lg shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                </span>

                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              </a>

              {/* Learn More Button */}
              <a
                href="#about"
                className="group relative overflow-hidden px-8 py-4 rounded-full border border-cyan-400/30 text-gray-200 backdrop-blur-md bg-white/5 shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/40 hover:border-cyan-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More
                </span>

                <span className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              </a>
            </div>

            {/* Mobile CV Button */}
            <a
              href="/kyachingprue_cv.pdf"
              download
              className="sm:hidden inline-flex items-center justify-center mt-8 gap-2 px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 16v-8m0 8l-3-3m3 3l3-3M5 20h14"
                />
              </svg>
              Download CV
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center pb-12 md:pb-0">
            {/* Profile Image */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated Gradient Border */}
              <div
                className="absolute w-67.5 h-67.5 md:w-85 md:h-85 rounded-full
                bg-linear-to-r from-purple-500 via-pink-500 to-blue-500
                animate-spin-slow blur-sm opacity-80"
              ></div>
              {/* Image */}
              <motion.img
                src="https://i.ibb.co.com/vCTZWF70/Chat-GPT-Image-Jul-19-2026-10-31-29-AM.png"
                alt="Kyachingprue Marma"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover
                 border-4 border-white z-10 shadow-2xl bg-gray-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              className="absolute top-0 left-10 md:left-16 text-cyan-400 text-4xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaReact />
            </motion.div>

            <motion.div
              className="absolute -top-5 md:top-5 right-10 md:right-20 text-yellow-400 text-4xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaJs />
            </motion.div>

            <motion.div
              className="absolute bottom-2 left-0 md:left-10 text-green-500 text-4xl"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-2 md:right-20 text-gray-300 text-4xl"
              animate={{ x: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            >
              <SiExpress />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-2 md:left-0 text-orange-400 text-4xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <SiFirebase />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-2 md:right-4 text-green-400 text-4xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <SiMongodb />
            </motion.div>
          </div>
        </div>
      </section>
    </header>
  )
};

export default Header;
