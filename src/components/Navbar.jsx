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
      className={`w-full top-0 left-0 z-50 transition-all duration-300 px-0 md:px-24 ${isScrolled ? "fixed bg-black shadow-lg" : "absolute bg-black"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white">
        {/* Left Side */}
        <div className="text-3xl font-bold">
          <Link
            to="/"
            className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-cyan-400 to-purple-400 animate-gradient-x"
          >
            Portfolio
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-3 md:gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm md:text-base transition-colors duration-300
     ${isActive ? "text-indigo-500 font-semibold" : "text-white hover:text-gray-400"}
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
     ${isActive ? "text-indigo-500 font-semibold" : "text-white hover:text-gray-400"}
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
     ${isActive ? "text-indigo-500 font-semibold" : "text-white hover:text-gray-400"}
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
     after:bg-indigo-500 after:transition-all after:duration-300
     hover:after:w-full`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
