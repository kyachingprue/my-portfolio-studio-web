import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Layers,
  Code,
  Globe,
} from "lucide-react";

const projects = [
  {
    name: "GreenBasket",
    category: "MERN E-Commerce Platform",
    description:
      "A full-featured MERN stack e-commerce platform with secure payments, authentication, admin dashboard, real-time data fetching, and modern UI animations.",
    image: "https://via.placeholder.com/600x400?text=GreenBasket",
    live: "https://analytics-chemical-auth.web.app/",
    github: "https://github.com/yourusername/greenbasket",
    tech: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "Axios",
      "Framer Motion",
      "Swiper",
      "Recharts",
      "Vite",
    ],
  },
  {
    name: "CodeTrail",
    category: "Programming Course Platform",
    description:
      "An online programming course platform with authentication, structured courses, and interactive UI. Video streaming is limited due to low-range Render server constraints.",
    image: "https://via.placeholder.com/600x400?text=CodeTrail",
    live: "https://school-mate-auth.web.app/",
    github: "https://github.com/yourusername/codetrail",
    tech: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Axios",
      "TanStack Query",
      "React Router",
      "Lucide Icons",
      "Recharts",
      "Vite",
    ],
  },
  {
    name: "World Travel Website",
    category: "Travel & Booking Platform",
    description:
      "A modern travel booking website with secure Stripe payments, dynamic tour listings, performance-optimized UI, and responsive design for global travelers.",
    image: "https://via.placeholder.com/600x400?text=World+Travel",
    live: "https://travel-project-frontend-rho.vercel.app/",
    github: "https://github.com/yourusername/world-travel",
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "Axios",
      "TanStack Query",
      "React Hook Form",
      "Intersection Observer",
      "Vite",
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of MERN stack projects showcasing real-world
            applications, clean architecture, and production-ready design.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-emerald-500 transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-sm text-emerald-400 flex items-center gap-2 mt-1">
                    <Layers size={16} />
                    {project.category}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-emerald-400 hover:underline"
                  >
                    <Globe size={18} />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
