import { useState } from "react";
import { motion } from "motion/react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiRender,
} from "react-icons/si";

const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    description:
      "HTML is the foundation of web development. I use semantic HTML to create accessible, SEO-friendly, and well-structured web pages that work across all devices and browsers.",
  },
  {
    name: "CSS (TailwindCSS & DaisyUI)",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    description:
      "CSS is used to style and layout web pages. I mainly use TailwindCSS for utility-first styling and DaisyUI for ready-made components, allowing me to build responsive, clean, and modern user interfaces faster.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    description:
      "JavaScript adds interactivity and dynamic behavior to web applications. I use modern ES6+ features to manage logic, handle events, work with APIs, and build efficient frontend and backend solutions.",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-300 text-4xl" />,
    description:
      "React is my primary frontend library. I build reusable components, manage state efficiently, and use Axios for API calls. I also use TanStack Query for powerful data fetching, caching, synchronization, and server-state management.",
  },
  {
    name: "Node.js & Express",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    description:
      "Node.js allows me to build scalable backend applications using JavaScript. With Express.js, I create RESTful APIs, handle routing, middleware, CORS, authentication logic, and server-side business rules.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-4xl" />,
    description:
      "MongoDB is a NoSQL database used to store application data. I design schemas, perform CRUD operations, and manage data efficiently for scalable MERN stack applications.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-orange-400 text-4xl" />,
    description:
      "Firebase is used for authentication and authorization. I implement email/password login, Google authentication, role-based access control, and secure user management for real-world projects.",
  },
  {
    name: "Deployment (Vercel & Render)",
    icon: <SiVercel className="text-white text-4xl" />,
    description:
      "I deploy frontend projects on Vercel and backend servers on Render. I configure environment variables, production builds, and ensure smooth CI/CD deployment for live applications.",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-white text-4xl" />,
    description:
      "Git and GitHub are essential for version control and collaboration. I use Git for tracking changes and GitHub for managing repositories, commits, branches, pull requests, and project documentation.",
  },
];

const TechnologyCard = ({ tech }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 120;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-black border border-gray-800 rounded-2xl p-6 text-white shadow-lg"
    >
      <div className="flex justify-center mb-4">{tech.icon}</div>

      <h3 className="text-xl font-semibold text-center mb-3 bg-linear-to-r from-gray-200 to-white bg-clip-text text-transparent">
        {tech.name}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed text-center">
        {expanded
          ? tech.description
          : tech.description.slice(0, limit) +
          (tech.description.length > limit ? "..." : "")}
      </p>

      {tech.description.length > limit && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 block mx-auto text-sm text-cyan-400 hover:text-cyan-300 transition"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </motion.div>
  );
};

const TechnologyCards = () => {
  return (
    <section className="bg-linear-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl py-2 font-bold text-center mb-12 bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Technologies I Use
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCards;
