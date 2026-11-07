import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileCode2,
  Github,
  Layers3,
  Sparkles,
} from 'lucide-react'

import productData from '../product/productData'

const INITIAL_PROJECTS = 6

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [expandedDescriptions, setExpandedDescriptions] = useState({})

  const visibleProjects = showAll
    ? productData
    : productData.slice(0, INITIAL_PROJECTS)

  const toggleDescription = (id) => {
    setExpandedDescriptions((previous) => ({
      ...previous,
      [id]: !previous[id],
    }))
  }

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#030712] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =====================================================
          PREMIUM DARK BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Top center glow */}
        <div className="absolute left-1/2 -top-45 h-125 w-175 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />

        {/* Left glow */}
        <div className="absolute -left-60 top-[25%] h-125 w-125 rounded-full bg-cyan-500/8 blur-[130px]" />

        {/* Right glow */}
        <div className="absolute -right-60 top-[45%] h-137.5 w-137.5 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Bottom glow */}
        <div className="absolute -bottom-50 left-[35%] h-112.5 w-150 rounded-full bg-emerald-500/5 blur-[130px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-size-[50px_50px]" />

        {/* Top dark fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/30 to-transparent" />

        {/* Bottom dark fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          {/* Small badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
            <Sparkles size={15} />
            Selected Work
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My{' '}
            <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A selection of thoughtful digital experiences, built with modern
            technologies and designed for real-world use.
          </p>
        </Motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}
        {visibleProjects.length > 0 ? (
          <Motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const isExpanded = expandedDescriptions[project.id]

                return (
                  <Motion.article
                    layout
                    key={project.id ?? project.slug ?? project.title}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.07, 0.35),
                    }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/5.5 hover:shadow-emerald-950/20"
                  >
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-br from-emerald-400/0 via-cyan-400/0 to-violet-500/0 opacity-0 blur-xl transition duration-500 group-hover:from-emerald-400/10 group-hover:via-cyan-400/5 group-hover:to-violet-500/10 group-hover:opacity-100" />

                    {/* =================================================
                        IMAGE
                    ================================================== */}
                    <div className="relative z-10 overflow-hidden border-b border-white/10 bg-slate-950">
                      <div className="relative aspect-16/10 overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.22),transparent_58%),linear-gradient(135deg,#0f172a,#020617)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/6 text-emerald-300 shadow-2xl shadow-emerald-950/40 transition duration-500 group-hover:scale-110 group-hover:border-emerald-300/30">
                              <FileCode2 size={34} strokeWidth={1.5} />
                            </div>
                            <span className="absolute bottom-5 left-6 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                              {project.title}
                            </span>
                          </div>
                        )}

                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                      </div>

                      {/* Featured */}
                      {project.featured && (
                        <div className="absolute right-4 top-4 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl">
                            <Sparkles size={13} />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}
                    <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">

                      {/* Title */}
                      <div>
                        <h4 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-300">
                          {project.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <div className="mt-4">
                        <p
                          className={`text-sm leading-6 text-slate-400 ${
                            !isExpanded ? 'line-clamp-3' : ''
                          }`}
                        >
                          {project.description}
                        </p>

                        {project.description?.length > 170 && (
                          <button
                            type="button"
                            onClick={() => toggleDescription(project.id)}
                            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-slate-300 transition-colors hover:text-emerald-400"
                          >
                            {isExpanded ? (
                              <>
                                Show Less
                                <ChevronUp size={14} />
                              </>
                            ) : (
                              <>
                                Read More
                                <ChevronDown size={14} />
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Technologies */}
                      {project.technologies?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 5)
                            .map((technology) => (
                              <span
                                key={technology}
                                className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors hover:border-emerald-400/20 hover:text-emerald-300"
                              >
                                {technology}
                              </span>
                            ))}

                          {project.technologies.length > 5 && (
                            <span className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-slate-500">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Push links to bottom */}
                      <div className="flex-1" />

                      {/* Divider */}
                      <div className="my-5 h-px bg-white/10" />

                      {/* =================================================
                          LINKS
                      ================================================== */}
                      <div className="flex flex-wrap items-center gap-2">

                        {/* Live */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/live inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                          >
                            <ExternalLink size={16} />

                            Live Demo

                            <ArrowUpRight
                              size={15}
                              className="transition-transform group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                            />
                          </a>
                        )}

                        {/* Client */}
                        {project.github_client && (
                          <a
                            href={project.github_client}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} client GitHub repository`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                          >
                            <Github size={17} />
                            Client
                          </a>
                        )}

                        {/* Server */}
                        {project.github_server && (
                          <a
                            href={project.github_server}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} server GitHub repository`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                          >
                            <Github size={17} />
                            Server
                          </a>
                        )}

                        {/* Single GitHub */}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                          >
                            <Github size={17} />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </Motion.article>
                )
              })}
            </AnimatePresence>
          </Motion.div>
        ) : (
          /* =====================================================
             EMPTY STATE
          ====================================================== */
          <Motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-dashed border-white/10 bg-white/2.5 px-6 py-16 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-slate-500">
              <Layers3 size={26} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-white">
              No projects found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              There are no projects to show right now.
            </p>
          </Motion.div>
        )}

        {/* =====================================================
            SHOW MORE / SHOW LESS
        ====================================================== */}
        {productData.length > INITIAL_PROJECTS && (
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-slate-300 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5"
                  />
                </>
              ) : (
                <>
                  Show More Projects
                  <ChevronDown
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </>
              )}
            </button>
          </Motion.div>
        )}

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-12 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-10"
        >
          {/* CTA glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[90px]" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold text-emerald-400">
              Have a project in mind?
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build something useful and beautiful.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              I enjoy creating responsive interfaces and practical applications
              that make everyday tasks easier.
            </p>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
