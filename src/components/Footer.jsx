import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 text-white py-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>

        {/* Description */}
        <p className="mb-6 text-gray-300">
          I'm a passionate MERN stack developer. I create responsive and
          dynamic web applications using modern technologies.
        </p>

        {/* Skills */}
        <div className="mb-6">
          <p className="mb-2">💻 Programming Skills:</p>
          <p className="text-gray-300">
            HTML | CSS | JavaScript | React.js | Node.js | Express.js | MongoDB | TailwindCSS | REST API | Firebase
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
