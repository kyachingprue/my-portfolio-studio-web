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
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "fixed bg-black shadow-lg" : "absolute bg-black"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white">
        {/* Left Side */}
        <div className="text-2xl font-bold">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-6 text-lg">
          <NavLink to="/" className="hover:text-gray-400 text-sm md:text-base transition-colors">
            Home
          </NavLink>
          <NavLink
            to="/my-projects"
            className="hover:text-gray-400 text-sm md:text-base transition-colors"
          >
            My Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
