import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Home,
  ArrowLeft,
  Code,
  Bug,
  Terminal,
  Laptop,
} from "lucide-react";

 const ErrorPage =() => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4">

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-cyan-400 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Code size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-16 text-purple-400 opacity-20"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Terminal size={90} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-1/3 text-pink-400 opacity-20"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Laptop size={70} />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-2xl p-10 text-center border border-white/20 shadow-2xl"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-500/20 text-red-400">
            <Bug size={48} />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-7xl font-extrabold tracking-widest mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
          <br />
          Let’s get you back to your portfolio.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-medium"
          >
            <Home size={18} />
            Go Back Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-medium"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Extra Feature */}
        <p className="mt-8 text-sm text-gray-400">
          💡 Tip: Check the URL or explore my projects from the homepage.
        </p>
      </motion.div>
    </div>
  );
}

export default ErrorPage;
