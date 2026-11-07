import { useEffect, useState } from 'react'
import { motion as Motion, useReducedMotion } from 'motion/react'
import { MapPin, Network, Sparkles } from 'lucide-react'
import { scientists } from '../data/scientists'
import { positions } from '../data/networkPositions'

const networkMembers = scientists.slice(0, positions.length)

const connections = networkMembers.flatMap((_, index) => {
  const { x, y } = positions[index]
  const x1 = Number.parseFloat(x)
  const y1 = Number.parseFloat(y)

  return networkMembers
    .map((_, otherIndex) => {
      if (otherIndex === index) return null

      const otherX = Number.parseFloat(positions[otherIndex].x)
      const otherY = Number.parseFloat(positions[otherIndex].y)

      return {
        start: Math.min(index, otherIndex),
        end: Math.max(index, otherIndex),
        distance: (x1 - otherX) ** 2 + (y1 - otherY) ** 2,
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 2)
    .map(({ start, end }) => `${start}-${end}`)
})

const uniqueConnections = [...new Set(connections)].map((connection) => {
  const [start, end] = connection.split('-').map(Number)
  return { start, end, id: connection }
})

function ScientistNetwork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const reduceMotion = useReducedMotion()
  const focusedIndex = hoveredIndex ?? selectedIndex ?? activeIndex
  const selectedScientist =
    selectedIndex === null ? null : networkMembers[selectedIndex]

  useEffect(() => {
    if (reduceMotion) return undefined

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % networkMembers.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  const activeConnections = uniqueConnections.filter(
    ({ start, end }) => start === focusedIndex || end === focusedIndex,
  )

  return (
    <section className="relative isolate overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -right-48 bottom-0 h-128 w-lg rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/6 px-4 py-2 text-sm font-medium text-cyan-200">
            <Sparkles size={15} aria-hidden="true" />
            A living map of ideas
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Great minds,{' '}
            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              connected
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore the people whose ideas continue to shape computer science.
            Select a node to follow its connections through the network.
          </p>
        </Motion.header>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-300 sm:mt-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-2">
            <Network size={14} className="text-cyan-300" aria-hidden="true" />
            {networkMembers.length} pioneers
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Live connections
          </span>
        </div>

        <div className="relative mx-auto mt-8 h-117.5 max-w-6xl sm:h-142.5 lg:h-162.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/8 sm:h-72 sm:w-72"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/10 sm:h-52 sm:w-52"
          />
          <Motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(84vw,34rem)] w-[min(84vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/8"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="network-line-gradient">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            {uniqueConnections.map(({ start, end, id }) => {
              const from = positions[start]
              const to = positions[end]
              const isActive = activeConnections.some(
                (connection) => connection.id === id,
              )

              return (
                <g key={id}>
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isActive ? 'url(#network-line-gradient)' : '#64748b'}
                    strokeWidth={isActive ? 1.5 : 0.8}
                    strokeOpacity={isActive ? 0.85 : 0.2}
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-500"
                  />
                  {isActive && !reduceMotion && (
                    <Motion.circle
                      r="0.48"
                      fill="#a5f3fc"
                      initial={{
                        cx: Number.parseFloat(from.x),
                        cy: Number.parseFloat(from.y),
                      }}
                      animate={{
                        cx: [
                          Number.parseFloat(from.x),
                          Number.parseFloat(to.x),
                        ],
                        cy: [
                          Number.parseFloat(from.y),
                          Number.parseFloat(to.y),
                        ],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                      }}
                    />
                  )}
                </g>
              )
            })}
          </svg>

          {networkMembers.map((scientist, index) => {
            const position = positions[index]
            const isFocused = focusedIndex === index
            const isSelected = selectedIndex === index

            return (
              <Motion.button
                key={scientist.id}
                type="button"
                aria-label={`${scientist.name}, ${scientist.field}. Select to highlight connections.`}
                aria-pressed={isSelected}
                onClick={() =>
                  setSelectedIndex((current) =>
                    current === index ? null : index,
                  )
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.035,
                }}
                whileHover={reduceMotion ? undefined : { scale: 1.16 }}
                style={{
                  left: position.x,
                  top: position.y,
                  translate: '-50% -50%',
                }}
                className={`group absolute z-10 flex size-10 items-center justify-center rounded-full border bg-slate-950 p-1 shadow-lg outline-none transition-[border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] sm:size-12 md:size-14 ${
                  isFocused
                    ? 'border-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.55)]'
                    : 'border-white/25 shadow-black/30 hover:border-cyan-200/80'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -inset-1 rounded-full border border-cyan-300/70 transition-opacity duration-300 ${
                    isFocused ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <img
                  src={scientist.image}
                  alt=""
                  loading="lazy"
                  draggable="false"
                  className="relative h-full w-full rounded-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-[#050816] transition-colors duration-300 ${
                    isFocused ? 'bg-emerald-300' : 'bg-slate-500'
                  }`}
                />
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-max max-w-44 -translate-x-1/2 rounded-xl border border-white/10 bg-slate-950/95 px-3 py-2 text-left opacity-0 shadow-xl backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="block text-xs font-semibold text-white">
                    {scientist.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-cyan-200">
                    {scientist.field}
                  </span>
                </span>
              </Motion.button>
            )
          })}
        </div>

        <Motion.div
          layout
          aria-live="polite"
          className="mx-auto -mt-2 flex min-h-24 max-w-xl items-center justify-center"
        >
          {selectedScientist ? (
            <Motion.div
              key={selectedScientist.id}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-full items-center gap-4 rounded-2xl border border-cyan-200/15 bg-slate-900/70 p-4 shadow-xl shadow-cyan-950/20 backdrop-blur-xl sm:p-5"
            >
              <img
                src={selectedScientist.image}
                alt=""
                className="size-12 shrink-0 rounded-full border border-cyan-200/30 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white">
                  {selectedScientist.name}
                </p>
                <p className="mt-1 text-sm text-cyan-100/80">
                  {selectedScientist.field}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPin size={12} aria-hidden="true" />
                  {selectedScientist.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-200/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                Clear
              </button>
            </Motion.div>
          ) : (
            <p className="text-center text-xs text-slate-500">
              Hover, focus, or select a portrait to explore its connections
            </p>
          )}
        </Motion.div>
      </div>
    </section>
  )
}

export default ScientistNetwork
