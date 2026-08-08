import { motion } from 'motion/react'
import { FaCode, FaLaptopCode, FaDatabase, FaRocket } from 'react-icons/fa'
import LineBounce from './LineBounce'

const journeyData = [
  {
    year: '2024',
    icon: <FaCode />,
    title: 'Programming Journey Started',
    description:
      'After finishing college, my elder brother inspired me to start learning programming. Then I joined Programming Hero and learned MERN Stack development with Jhankar Mahbub.'
  },
  {
    year: '2025',
    icon: <FaLaptopCode />,
    title: 'Practice & Deep Learning',
    description:
      'After completing the course, I practiced consistently and explored advanced technologies like Next.js, TypeScript, and modern frontend development concepts.'
  },
  {
    year: '2026',
    icon: <FaDatabase />,
    title: 'Advanced Understanding',
    description:
      'Now I fairly understand JavaScript libraries, frameworks, backend systems, databases, and real-world development workflow. I am continuously learning and improving every day.'
  },
  {
    year: 'Future',
    icon: <FaRocket />,
    title: 'Career & Growth',
    description:
      'I am preparing for professional opportunities and trying to improve my English communication skills daily while building impactful real-world projects.'
  }
]

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-20 px-4 sm:px-6 lg:px-10"
    >
      <LineBounce/>
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            My Journey
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            <span className="bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-sm sm:text-base lg:text-lg leading-8">
            I am a passionate Full Stack Developer from Bangladesh who loves
            building modern web applications and continuously learning new
            technologies. My programming journey started with curiosity,
            practice, and a strong dream to grow in the tech industry.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden md:block w-1 h-full -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-0 bg-linear-to-b from-cyan-400 via-blue-500 to-green-400 animate-pulse"></div>
          </div>

          <div className="space-y-14">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 120,
                  scale: 0.85
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03
                }}
                transition={{
                  duration: 0.9,
                  ease: 'easeOut',
                  delay: index * 0.15
                }}
                viewport={{
                  once: false,
                  amount: 0.35
                }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 0px rgba(34,211,238,0.4)',
                      '0 0 25px rgba(34,211,238,0.9)',
                      '0 0 0px rgba(34,211,238,0.4)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 items-center justify-center text-white text-xl z-20"
                >
                  {item.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className={`group relative overflow-hidden w-full md:w-[46%] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl transition-all duration-700 hover:border-cyan-400/40 hover:shadow-cyan-500/30 hover:bg-white/10 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  {/* Mobile Icon */}
                  <div className="md:hidden w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-cyan-500/30">
                    {item.icon}
                  </div>

                  <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-medium border border-cyan-400/20 mb-5">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-8 text-sm sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
            I believe consistency, practice, and continuous learning
            <br />
            are the keys to becoming a great developer.
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
