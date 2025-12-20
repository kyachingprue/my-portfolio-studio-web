import { motion } from "motion/react";
import {
  Rocket,
  Target,
  LineChart,
  CalendarCheck,
  Code,
  Brain,
} from "lucide-react";

export default function ExtraFeature() {
  return (
    <section className="relative py-24 bg-linear-to-br from-black via-slate-950 to-indigo-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Extra Developer Insights
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Beyond skills — this section reflects my mindset, workflow, and
            professional approach as a modern full-stack developer.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <FeatureCard
            icon={<Rocket />}
            title="Current Focus"
            desc="Building scalable MERN & Next.js applications with clean architecture and real-world business logic."
          />

          {/* Card 2 */}
          <FeatureCard
            icon={<LineChart />}
            title="Development Metrics"
            desc="Daily coding practice • Real projects • Performance optimization • Security-first mindset."
          />

          {/* Card 3 */}
          <FeatureCard
            icon={<Target />}
            title="Career Goal"
            desc="To become a world-class software engineer and work on impactful global products."
          />

          {/* Card 4 */}
          <FeatureCard
            icon={<Brain />}
            title="Problem Solving"
            desc="Strong in debugging, logical thinking, DSA basics, and converting ideas into scalable solutions."
          />

          {/* Card 5 */}
          <FeatureCard
            icon={<CalendarCheck />}
            title="Availability Timeline"
            desc="Open for freelance, internships, and remote opportunities with flexible collaboration."
          />

          {/* Card 6 */}
          <FeatureCard
            icon={<Code />}
            title="Coding Philosophy"
            desc="Readable code • Reusable components • Clean UI • Maintainable backend architecture."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Card ---------- */

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-indigo-500/30"
  >
    <div className="flex items-center gap-3 mb-4 text-indigo-400">
      {icon}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);
