import { motion } from 'motion/react'
import {
  Code2,
} from 'lucide-react'

const ContactProgrammingCart = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-20 bg-linear-to-br from-black via-[#09090f] to-purple-950">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-100 h-100 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/10 blur-3xl rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 🔹 LEFT SIDE – PROGRAMMING IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center group"
        >
          {/* Small Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

          {/* Floating Badge */}
          <div className="absolute top-5 left-5 z-20 px-4 py-2 rounded-full border border-cyan-400/20 bg-black/40 backdrop-blur-md">
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">
              Full Stack Web Developer
            </p>
          </div>

          <img
            src="https://i.ibb.co.com/39Ykcv9d/fotis-fotopoulos-6s-Al6a-Q4-OWI-unsplash.jpg"
            alt="Programming"
            className="
      rounded-3xl
      shadow-2xl
      h-87.5
      sm:h-112.5
      lg:h-130
      w-full
      object-cover
      border
      border-white/10
      transition-all
      duration-500
      group-hover:scale-[1.02]
      group-hover:shadow-cyan-500/20
    "
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
        </motion.div>

        {/* 🔥 RIGHT SIDE – PROGRAMMING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
    relative
    overflow-hidden
    bg-white/10
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    p-6
    sm:p-8
    shadow-2xl
    hover:border-cyan-400/20
    transition-all
    duration-500
  "
        >
          {/* Small Glow Effect */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

          {/* ICON + TITLE */}
          <div className="flex items-center gap-4 text-purple-400">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Code2 size={30} />
            </div>

            <div>
              <p className="text-cyan-300 text-sm">Available For Work</p>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Full Stack
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}
                  Developer
                </span>
              </h2>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 leading-8 mt-8 text-sm sm:text-base"
          >
            I build modern, scalable, and responsive web applications using{' '}
            <span className="text-white font-semibold">
              React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and
              PostgreSQL
            </span>
            .
            <br />
            <br />
            Passionate about creating clean UI, secure backend systems, and
            real-world digital solutions with modern technologies.
          </motion.p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              'React.js',
              'Next.js',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'PostgreSQL',
              'Tailwind CSS',
              'Shadcn UI',
              'JWT',
              'Firebase',
              'Thunder Client',
              'Git & GitHub',
              'RESTful APIs',
              'GraphQL',
              'Tanstack Query'
            ].map((tech, index) => (
              <span
                key={index}
                className="
          px-4
          py-2
          rounded-full
          text-sm
          border
          border-cyan-400/10
          bg-white/5
          text-gray-200
          hover:border-cyan-400/30
          hover:text-cyan-300
          transition-all
          duration-300
        "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactProgrammingCart
