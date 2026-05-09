import { motion } from "motion/react";
import {
  Github,
  Layers,
  Globe,
  FileBraces,
} from "lucide-react";

const projects = [
  {
    name: 'GreenBasket',
    category: 'MERN E-Commerce Platform',
    description:
      'A full-featured MERN stack e-commerce platform with secure payments, authentication, admin dashboard, real-time data fetching, and modern UI animations.',
    image: 'https://i.ibb.co.com/fzncRzph/Screenshot-2026-05-09-223019.png',
    live: 'https://green-basket-website.vercel.app/',
    github_client: 'https://github.com/kyachingprue/my-ecommerce-client',
    github_server: 'https://github.com/kyachingprue/my-ecommerce-server'
  },
  {
    name: 'CodeTrail',
    category: 'Programming Course Platform',
    description:
      'An online programming course platform with authentication, structured courses, and interactive UI. Video streaming is limited due to low-range Render server constraints.',
    image: 'https://i.ibb.co.com/prNgz6PY/1673755852454.jpg',
    live: 'https://school-mate-auth.web.app/',
    github_client: 'https://github.com/kyachingprue/code-trail-frontend',
    github_server: 'https://github.com/kyachingprue/code-trail-backend'
  },
  {
    name: 'ChatFlow Chat Studio',
    category: 'Social Media & Realtime Chat Platform',
    description:
      'A modern social media chat platform with realtime messaging using Socket.IO, secure authentication, dynamic user interactions, and a responsive, performance-optimized UI for seamless communication.',
    image: 'https://i.ibb.co.com/tMk3nRJ2/chatflow-studio-image.png',
    live: 'https://chatflow-chat-studio.vercel.app/',
    github_client:
      'https://github.com/kyachingprue/chatflow-chat-studio-client',
    github_server:
      'https://github.com/kyachingprue/chatflow-studio-server-second'
  },
  {
    name: 'GoExplore Travel Studio',
    category: 'MERN Travel & Booking Platform',
    description:
      'A modern MERN travel platform for exploring destinations, booking trips, and managing travel experiences with a responsive and user-friendly interface.',
    image: 'https://i.ibb.co.com/nNQsxhDb/Screenshot-2026-01-13-224233.png',
    live: 'https://go-explore-travel-studio-client.vercel.app/',
    github_client:
      'https://github.com/kyachingprue/GoExplore-travel-studio-client',
    github_server:
      'https://github.com/kyachingprue/GoExplore-travel-studio-server'
  },
  {
    name: 'Freelance Job Marketplace',
    category: 'Full Stack Job & Freelancing Platform',
    description:
      'A modern full-stack freelancing platform where clients can post jobs and freelancers can apply, manage bids, and collaborate through a responsive dashboard.',
    image: 'https://i.ibb.co.com/qMx5fKWt/Screenshot-2026-03-18-011232.png',
    live: 'https://freelance-job-website-client.vercel.app/',
    github_client:
      'https://github.com/kyachingprue/freelance-job-website-client',
    github_server:
      'https://github.com/kyachingprue/freelance-job-website-server'
  },
  {
    name: 'AetherAI',
    category: 'AI-Powered SaaS & Digital Innovation Platform',
    description:
      'A modern AI-driven platform focused on digital innovation, smart automation, creative technology, and futuristic user experiences with sleek UI animations and responsive web design.',
    image: 'https://i.ibb.co.com/KxFjyYs9/Aether-AI.png',
    live: 'https://aetheraiwebsite.vercel.app/',
    github_client: 'https://github.com/kyachingprue/ai-chat-project-client',
    github_server: 'https://github.com/kyachingprue/ai-chat-project-client'
  }
]


const nextProjects = [
  {
    name: "ProActive Motivation AI",
    category: "Next.js & TypeScript AI Productivity Application",
    description: "ProActive Motivation AI is a modern full-stack AI-powered web application built with Next.js and TypeScript to help users stay motivated and productive. The platform provides AI-generated motivational insights, smart content generation, interactive UI components, and secure authentication. It focuses on performance, clean architecture, and responsive design while demonstrating real-world AI integration in a modern SaaS-style application.",
    image: "https://i.ibb.co.com/Pvzhb8SX/ae507af2-c3d2-4664-8b37-e325ab3d7961.png",
    live: "https://proactive-motivation-production-8b8b.up.railway.app/",
    github_link: "https://github.com/kyachingprue/ai-resonance-app",
  },
  {
    name: "AI Document Analysis Platform",
    category: "Next.js & TypeScript AI SaaS Application",
    description: "AI Document Analysis Platform is a full-stack AI powered SaaS application built with Next.js and TypeScript that allows users to upload and analyze documents intelligently. The system provides AI-driven summaries, question answering, sentiment analysis, and entity extraction. It features secure authentication, document management, real-time AI processing, markdown rendering, and a modern responsive dashboard designed for performance and scalability.",
    image: "https://i.ibb.co.com/CKxPTVss/Screenshot-2026-03-18-012913.png",
    live: "https://ai-document-analysis.vercel.app/",
    github_link: "https://github.com/kyachingprue/multi-document-analysis",
  }
]


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
            A selection of MERN-Stack and Full-Stack projects showcasing real-world
            applications, clean architecture, and production-ready design.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-2 pb-5"
        >
          <FileBraces size={28} color="pink"/>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400">React.js & Node.js Projects</h3>
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
        {/* Full Stack Project */}
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-2 py-10 mt-12"
        >
          <FileBraces size={28} color="pink" />
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400">Next.js & TypeScript Projects</h3>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nextProjects.map((project, index) => (
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
                    href={project.github_link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                  >
                    <Github size={18} />
                    GitHub Link
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
