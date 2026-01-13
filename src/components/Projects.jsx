import { motion } from "motion/react";
import {
  Github,
  Layers,
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
    github_client: "https://github.com/kyachingprue/my-ecommerce-client",
    github_server: "https://github.com/kyachingprue/my-ecommerce-server",
  },
  {
    name: "CodeTrail",
    category: "Programming Course Platform",
    description:
      "An online programming course platform with authentication, structured courses, and interactive UI. Video streaming is limited due to low-range Render server constraints.",
    image: "https://i.ibb.co.com/prNgz6PY/1673755852454.jpg",
    live: "https://school-mate-auth.web.app/",
    github_client: "https://github.com/kyachingprue/code-trail-frontend",
    github_server: "https://github.com/kyachingprue/code-trail-backend",
  },
  {
    name: "ChatFlow Chat Studio",
    category: "Social Media & Realtime Chat Platform",
    description: "A modern social media chat platform with realtime messaging using Socket.IO, secure authentication, dynamic user interactions, and a responsive, performance-optimized UI for seamless communication.",
    image: "https://i.ibb.co.com/tMk3nRJ2/chatflow-studio-image.png",
    live: "https://chatflow-chat-studio.vercel.app/",
    github_client: "https://github.com/kyachingprue/chatflow-chat-studio-client",
    github_server: "https://github.com/kyachingprue/chatflow-studio-server-second",
  },
  {
    name: "GoExplore Travel Studio",
    category: "MERN Travel & Booking Platform",
    description:
      "GoExplore Travel Studio is a full-stack MERN travel platform designed for discovering, exploring, and booking travel experiences. It features secure authentication, dynamic travel packages, real-time data fetching, user bookings, payment integration, and an intuitive, responsive UI optimized for performance and modern travel experiences.",
    image: "https://i.ibb.co.com/nNQsxhDb/Screenshot-2026-01-13-224233.png",
    live: "https://go-explore-travel-studio-client.vercel.app/",
    github_client: "https://github.com/kyachingprue/GoExplore-travel-studio-client",
    github_server: "https://github.com/kyachingprue/GoExplore-travel-studio-server",
  }
];

const skills = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "DaisyUI",
  "React",
  "Motion",
  "Axios",
  "TanStack Query",
  "Socket.IO",
  "Lucide-React",
  "React-Icons",
  "Recharts",
  "Express",
  "CORS",
  "Dotenv",
  "MongoDB",
  "Firebase",
  "REST API",
  "CRUD",
  "React-Hot-Toast",
  "SweetAlert2",
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

        {/* All Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {skills.map((skill) => (
            <p
              key={skill}
              className="bg-blue-900/50 text-gray-300 hover:text-white border border-slate-800 rounded-full px-4 py-1.5 text-sm transition"
            >
              {skill}
            </p>
          ))}
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
                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-emerald-400 hover:underline"
                  >
                    <Globe size={18} />
                    Live
                  </a>

                  <a
                    href={project.github_client}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                  >
                    <Github size={18} />
                    Client
                  </a>

                  <a
                    href={project.github_server}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                  >
                    <Github size={18} />
                    Server
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
