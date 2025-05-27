"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Person {
  image: string;
  name: string;
  role: string;
}

interface AvatarStackProps {
  people: Person[];
  maxVisible?: number;
}

export const AvatarStack: React.FC<AvatarStackProps> = ({
  people,
  maxVisible = 5,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center space-x-[-12px] relative">
      {people.slice(0, maxVisible).map((person, index) => (
        <div
          key={index}
          className="relative z-10 group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white shadow">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>

          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full mb-3 border border-[var(--border-primary)] -translate-x-1/2 px-3 py-2 rounded-md bg-black text-white text-sm shadow-xl z-50 whitespace-nowrap"
              >
                <div className="font-semibold">{person.name}</div>
                <div className="text-zinc-400 text-xs">{person.role}</div>

                <div className="absolute left-1/4 top-full -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {people.length > maxVisible && (
        <div className="w-14 h-14 rounded-full bg-[#0a0a0a] text-white text-sm font-medium flex items-center justify-center border-2 border-white shadow-md">
          +{people.length - maxVisible}
        </div>
      )}
    </div>
  );
};








