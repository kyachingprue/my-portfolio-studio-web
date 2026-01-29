import React from "react";
import { motion } from "motion/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaReact,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "I'm Kyachingprue Marma",
      "I'm a Web Developer",
      "I'm a MERN Stack Developer",
      "I'm a Software Developer",
      "I'm a Programmer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="min-h-screen mt-16 md:mt-0 bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950
 text-white flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-2xl mt-12 md:mt-0 md:text-4xl font-bold mb-4 bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MERN Stack Developer
          </h1>


          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            {text}
            <Cursor cursorColor="#22c55e" />
          </h2>

          <p className="text-gray-400 leading-relaxed">
            My name is <span className="text-white font-semibold">Kyachingprue Marma</span>.
            I am from Singinala, Mohamuni Para.
            I am a passionate MERN Stack Developer who loves building modern,
            responsive, and scalable web applications.
            <br /><br />
            I have experience working with HTML, CSS, TailwindCSS, DaisyUI,
            JavaScript, React, TanStack Query (data fetching & caching), Axios,
            REST APIs, Node.js, Express.js, CORS, Dotenv, MongoDB, and Firebase
            (authentication & authorization).
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Profile Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Gradient Border */}
            <div className="absolute w-67.5 h-67.5 md:w-85 md:h-85 rounded-full 
    bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 
    animate-spin-slow blur-sm opacity-80">
            </div>

            {/* Image */}
            <motion.img
              src="https://i.ibb.co.com/xSyPdjQZ/new-generate-image-1.png"
              alt="Kyachingprue Marma"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
    border-4 border-white z-10 shadow-2xl bg-black"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
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
  );
};

export default Header;
