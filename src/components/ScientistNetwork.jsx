import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { scientists } from '../data/scientists'
import { positions } from '../data/networkPositions'

const ScientistNetwork = () => {
  const [step, setStep] = useState(0)

  // Auto Move
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % positions.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/*-----> BACKGROUND <-----*/}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-950 via-[#09090f] to-black" />

      {/* Animated Gradient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-cyan-500/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
        className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/10 blur-3xl rounded-full"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      {/* ================= TITLE ================= */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl lg:text-6xl font-black leading-tight"
        >
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Scientist Network
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-2xl text-gray-300 text-sm sm:text-base lg:text-lg leading-8"
        >
          Explore an animated futuristic network of brilliant scientists,
          connected through electric energy and interactive motion.
        </motion.p>
      </div>

      {/* ================= ELECTRIC NETWORK ================= */}
      <div className="relative w-full h-200 sm:h-225 lg:h-screen">
        {/* SVG ELECTRIC LINES */}
        <svg className="absolute inset-0 w-full h-full z-0">
          {positions.map((pos, i) => {
            const next = positions[(i + 1) % positions.length]

            return (
              <g key={i}>
                {/* Glow Line */}
                <motion.line
                  x1={pos.x}
                  y1={pos.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="rgba(34,211,238,0.18)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  animate={{
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />

                {/* Main Electric Line */}
                <motion.line
                  x1={pos.x}
                  y1={pos.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="url(#electricGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="12 10"
                  animate={{
                    strokeDashoffset: [0, -40]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              </g>
            )
          })}

          {/* Gradient */}
          <defs>
            <linearGradient
              id="electricGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* -----> SCIENTIST NODES <----- */}
        {scientists.slice(0, 17).map((scientist, index) => {
          const posIndex = (step + index) % positions.length

          return (
            <Tooltip.Provider key={scientist.id}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div
                    className="absolute z-10"
                    animate={{
                      left: positions[posIndex].x,
                      top: positions[posIndex].y
                    }}
                    transition={{
                      duration: 1.8,
                      ease: 'easeInOut'
                    }}
                  >
                    {/* OUTER GLOW */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.15
                      }}
                      className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl"
                    />

                    {/* IMAGE */}
                    <motion.img
                      src={scientist.image}
                      alt={scientist.name}
                      className="
                        relative
                        w-14 h-14
                        sm:w-16 sm:h-16
                        md:w-20 md:h-20
                        lg:w-24 lg:h-24
                        rounded-full
                        object-cover
                        border-2 border-cyan-400/80
                        bg-black/40
                        backdrop-blur-xl
                        cursor-pointer
                        shadow-[0_0_35px_rgba(34,211,238,0.45)]
                      "
                      whileHover={{
                        scale: 1.18,
                        rotate: 3
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 220,
                        damping: 12
                      }}
                    />

                    {/* Small Pulse Dot */}
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-400"
                    />
                  </motion.div>
                </Tooltip.Trigger>

                {/* TOOLTIP */}
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    sideOffset={12}
                    className="
                      z-50
                      rounded-2xl
                      border border-cyan-400/20
                      bg-black/70
                      backdrop-blur-2xl
                      px-5 py-4
                      shadow-2xl
                      shadow-cyan-500/20
                    "
                  >
                    <p className="text-white font-bold text-sm sm:text-base">
                      {scientist.name}
                    </p>

                    <p className="text-cyan-300 text-sm mt-1">
                      {scientist.field}
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                      {scientist.location}
                    </p>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          )
        })}
      </div>
    </section>
  )
}

export default ScientistNetwork
