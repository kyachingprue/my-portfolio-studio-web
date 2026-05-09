import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed bg-black/50 shadow-lg' : 'absolute bg-black/50'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white">
        {/* Left Side */}
        <div className="text-xl md:text-3xl font-bold">
          <Link
            to="/"
            className="bg-clip-text flex items-center text-transparent bg-linear-to-r from-indigo-400 via-cyan-400 to-purple-400 animate-gradient-x"
          >
            Portfolio <span className="hidden md:block">Web</span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-3 items-center md:gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm md:text-base transition-colors duration-300
     ${isActive ? 'text-indigo-300 font-semibold' : 'text-white hover:text-gray-400'}
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
     after:bg-indigo-500 after:transition-all after:duration-300
     hover:after:w-full`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/my-projects"
            className={({ isActive }) =>
              `relative text-sm md:text-base transition-colors duration-300
     ${isActive ? 'text-indigo-300 font-semibold' : 'text-white hover:text-gray-400'}
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
     after:bg-indigo-500 after:transition-all after:duration-300
     hover:after:w-full`
            }
          >
            My Projects
          </NavLink>
          <NavLink
            to="/contact-me"
            className={({ isActive }) =>
              `relative text-sm md:text-base transition-colors duration-300
     ${isActive ? 'text-indigo-300 font-semibold' : 'text-white hover:text-gray-400'}
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
     after:bg-indigo-500 after:transition-all after:duration-300
     hover:after:w-full`
            }
          >
            Contact
          </NavLink>
          <a
            href="/kyachingprue_cv.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl
  bg-linear-to-r from-blue-600 to-indigo-600
  text-white font-medium
  shadow-lg shadow-blue-500/20
  hover:from-blue-500 hover:to-indigo-500
  hover:shadow-xl hover:shadow-blue-500/30
  hover:-translate-y-0.5
  transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
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
      </div>
    </nav>
  )
};

export default Navbar;
