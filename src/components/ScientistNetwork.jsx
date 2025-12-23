import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { scientists } from "../data/scientists";
import { positions } from "../data/networkPositions";


const ScientistNetwork = () => {
  const [step, setStep] = useState(0);

  // Change positions every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % positions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-linear-to-br from-indigo-950 via-purple-900 to-black">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

      {/* Electric Connection Lines */}
      <svg className="absolute inset-0 w-full h-full z-0">
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % positions.length];
          return (
            <motion.line
              key={i}
              x1={pos.x}
              y1={pos.y}
              x2={next.x}
              y2={next.y}
              stroke="rgba(34,211,238,0.55)"
              strokeWidth="2"
              strokeDasharray="5 8"
              animate={{ strokeDashoffset: [0, 30] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </svg>

      {/* Scientist Nodes */}
      {scientists.slice(0, 17).map((scientist, index) => {
        const posIndex = (step + index) % positions.length;

        return (
          <Tooltip.Provider key={scientist.id}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <motion.div
                  className="absolute z-10"
                  animate={{
                    left: positions[posIndex].x,
                    top: positions[posIndex].y,
                  }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                >
                  <motion.img
                    src={scientist.image}
                    alt={scientist.name}
                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full 
                               border-2 border-cyan-400 
                               shadow-[0_0_25px_rgba(34,211,238,0.7)]
                               bg-black cursor-pointer"
                    whileHover={{ scale: 1.15 }}
                  />
                </motion.div>
              </Tooltip.Trigger>

              {/* Hover Card */}
              <Tooltip.Content
                side="top"
                className="z-20 rounded-lg bg-black/80 px-4 py-2 
                           text-sm text-white backdrop-blur 
                           border border-cyan-400"
              >
                <p className="font-semibold">{scientist.name}</p>
                <p className="text-cyan-300">{scientist.field}</p>
                <p className="text-gray-300">{scientist.location}</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        );
      })}
    </section>
  );
};

export default ScientistNetwork;
