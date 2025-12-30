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
    image: "https://i.ibb.co.com/DPjXFCn7/1-VMVKGNTxc7l-VEgce5uxd-Q.jpg",
    live: "https://analytics-chemical-auth.web.app/",
    github: "https://github.com/kyachingprue/my-ecommerce-client",
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "Motion",
      "Swiper",
      "Recharts",
      "Vite",
      "Express",
      "MongoDB",
      "Node.js"
    ],
  },
  {
    name: "CodeTrail",
    category: "Programming Course Platform",
    description:
      "An online programming course platform with authentication, structured courses, and interactive UI. Video streaming is limited due to low-range Render server constraints.",
    image: "https://i.ibb.co.com/prNgz6PY/1673755852454.jpg",
    live: "https://school-mate-auth.web.app/",
    github: "https://github.com/kyachingprue/code-trail-frontend",
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "TanStack Query",
      "React Router",
      "Lucide Icons",
      "Recharts",
      "Vite",
      "Express",
      "Cors",
      "MongoDB",
      "Node.js"
    ],
  },
  {
    "name": "ChatFlow Chat Studio",
    "category": "Social Media & Realtime Chat Platform",
    "description": "A modern social media chat platform with realtime messaging using Socket.IO, secure authentication, dynamic user interactions, and a responsive, performance-optimized UI for seamless communication.",
    "image": "https://i.ibb.co.com/tMk3nRJ2/chatflow-studio-image.png",
    "live": "https://chatflow-chat-studio.vercel.app/",
    "github": "https://github.com/kyachingprue/chatflow-chat-studio-client",
    "tech": [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Socket.IO",
      "TanStack Query",
      "React Hook Form",
      "Motion",
      "Cloudinary",
      "Recharts",
      "Express",
      "MongoDB",
      "Node.js"
    ],
  },
  {
    name: "World Travel Website",
    category: "Travel & Booking Platform",
    description:
      "A modern travel booking website with secure Stripe payments, dynamic tour listings, performance-optimized UI, and responsive design for global travelers.",
    image: "https://i.ibb.co.com/bYT4bsJ/travel-image.png",
    live: "https://travel-project-frontend-rho.vercel.app/",
    github: "https://github.com/kyachingprue/travel-project-frontend",
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "React Hook Form",
      "Vite",
      "Motion",
      "Express",
      "MongoDB",
      "Node.js"
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
          <h2 className="text-3xl md:text-5xl font-bold">
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
                className="w-full h-56 p-2 md:p-4 lg:p5 object-cover"
              />

              {/* Content */}
              <div className="p-4 space-y-4">
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
