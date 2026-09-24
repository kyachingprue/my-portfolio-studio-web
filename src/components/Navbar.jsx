import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import logo from '../assets/k.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'My Projects',
      path: '/my-projects'
    },
    {
      name: 'Contact',
      path: '/contact-me'
    }
  ]

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'fixed bg-black/80 shadow-lg backdrop-blur-xl'
            : 'absolute bg-black/80'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-2 lg:px-0 py-4 text-white">
          {/* ================= LOGO ================= */}
          <div>
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-2"
            >
              <img
                src={logo}
                className="h-7 w-7 md:h-8 md:w-8 transition-transform duration-300 group-hover:rotate-6"
                alt="Kyachingprue Marma Portfolio logo"
              />

              <h3 className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                Kyachingprue
                <span className="hidden md:inline">.dev</span>
              </h3>
            </Link>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm md:text-base transition-colors duration-300
                  ${
                    isActive
                      ? 'text-indigo-300 font-semibold'
                      : 'text-white hover:text-gray-400'
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-0.5
                  after:w-0 after:bg-indigo-500
                  after:transition-all after:duration-300
                  hover:after:w-full`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Desktop Download CV */}
            <a
              href="/kyachingprue_cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white text-sm font-medium
              shadow-lg shadow-blue-500/20
              hover:from-blue-500 hover:to-indigo-500
              hover:shadow-xl hover:shadow-blue-500/30
              hover:-translate-y-0.5
              transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex items-center justify-center
            w-10 h-10 rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            text-white
            hover:bg-white/10
            hover:border-indigo-400/40
            transition-all duration-300"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ===================================================== */}
      {/*                 MOBILE MENU OVERLAY                   */}
      {/* ===================================================== */}

      {/* Background Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm
        transition-opacity duration-300 md:hidden
        ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ================= MOBILE SIDE MENU ================= */}
      <div
        className={`fixed top-0 right-0 z-[70] h-screen w-full
        bg-[#050816]/95 backdrop-blur-2xl
        border-l border-white/10
        md:hidden
        transition-transform duration-500 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Decorative Gradient */}
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* ================= MOBILE HEADER ================= */}
        <div className="relative flex items-center justify-between px-5 py-5 border-b border-white/10">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img
              src={logo}
              className="h-8 w-8"
              alt="Kyachingprue Marma Portfolio logo"
            />

            <h3 className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
              Kyachingprue.dev
            </h3>
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            className="flex items-center justify-center
            w-10 h-10 rounded-xl
            border border-white/10
            bg-white/5
            text-white
            hover:bg-red-500/10
            hover:border-red-400/30
            hover:text-red-400
            transition-all duration-300"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div className="relative flex flex-col px-5 pt-10">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-500">
            Navigation
          </p>

          <div className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between
                  rounded-2xl px-5 py-4
                  border transition-all duration-300
                  ${
                    isActive
                      ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300'
                      : 'border-white/5 bg-white/[0.03] text-gray-300 hover:border-indigo-500/20 hover:bg-white/[0.06] hover:text-white'
                  }`
                }
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-600">0{index + 1}</span>

                  <span className="text-lg font-medium">{link.name}</span>
                </div>

                <span className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NavLink>
            ))}
          </div>

          {/* ================= DOWNLOAD CV ================= */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-500">
              Resume
            </p>

            <a
              href="/kyachingprue_cv.pdf"
              download
              onClick={closeMenu}
              className="group flex w-full items-center justify-center gap-3
              rounded-2xl px-5 py-4
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              text-white font-semibold
              shadow-lg shadow-indigo-500/20
              hover:shadow-xl hover:shadow-indigo-500/30
              hover:-translate-y-1
              transition-all duration-300"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />

              <span>Download CV</span>
            </a>
          </div>

          {/* ================= MOBILE FOOTER ================= */}
          <div className="mt-auto pt-12 pb-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="mt-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Kyachingprue Marma
            </p>

            <p className="mt-1 text-center text-xs text-gray-600">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
