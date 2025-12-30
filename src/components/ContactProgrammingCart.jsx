import { motion } from "motion/react";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const ContactProgrammingCart = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-black via-purple-950 to-pink-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT SIDE – PROGRAMMING IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/9kHbct0h/9-kid-is-coding-in-different-programming-languages.jpg"
            alt="Programming"
            className="rounded-2xl shadow-2xl max-h-105 object-cover"
          />
        </motion.div>

        {/* 🔥 RIGHT SIDE – PROGRAMMING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-6"
        >
          {/* ICON */}
          <div className="flex items-center gap-3 text-purple-400">
            <Code2 size={32} />
            <h2 className="text-3xl font-bold text-white">
              Let’s Build Something Powerful
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed">
            I’m passionate about building modern, scalable, and user-friendly web
            applications using cutting-edge technologies like React, Node.js,
            MongoDB, and modern UI/UX principles. If you have an idea, project,
            or opportunity — let’s connect and turn it into reality.
          </p>

          {/* CONTACT ICONS */}
          <div className="flex gap-6 pt-4">
            <div className="relative inline-block">
              {/* Email Icon */}
              <div className="text-gray-300 hover:text-pink-400 transition cursor-pointer peer">
                <Mail size={28} />
              </div>
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2
                whitespace-nowrap rounded-md
                bg-black/80 px-3 py-1 text-sm text-white
                opacity-0 peer-hover:opacity-100
                transition duration-300">
                kyachingpruemarma.info@gmail.com
              </span>
            </div>

            <Link to="https://github.com/kyachingprue"
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              <Github size={28} />
            </Link>

            <Link
              to="https://www.linkedin.com/in/kyachingpruemarma"
              target="_blank"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <Linkedin size={28} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactProgrammingCart;
