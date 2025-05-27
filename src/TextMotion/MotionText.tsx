"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface MotionTextProps {
  text: string;
  delayStep?: number;
  direction?: "up" | "down";
  loop?: boolean;
  className?: string;
  interval?: number;
}

export const MotionText: React.FC<MotionTextProps> = ({
  text,
  delayStep = 0.06,
  direction = "up",
  loop = false,
  interval = 3000,
  className,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)"); 
  const words = text.split(" ");
  const [iteration, setIteration] = useState(0);

  const initialY = direction === "up" ? 40 : -40;
  const exitY = direction === "up" ? -40 : 40;

  useEffect(() => {
    if (!loop) return;

    const timer = setInterval(() => {
      setIteration((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [loop, interval]);

  return (
    <AnimatePresence mode="wait">
      <div className={clsx("inline-block overflow-hidden", className)} key={iteration}>
        {isDesktop ? (
          // Desktop: animar palabra por palabra
          words.map((word, index) => (
            <span key={`${word}-${index}`} className="inline-block mr-2 overflow-hidden">
              <motion.span
                initial={{ y: initialY, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: exitY, opacity: 0 }}
                transition={{
                  delay: index * delayStep,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="inline-block"
                style={{ willChange: "transform, opacity" }}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))
        ) : (
          
          <motion.span
            initial={{ y: initialY, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: exitY, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="inline-block"
            style={{ willChange: "transform, opacity" }}
          >
            {text}
          </motion.span>
        )}
      </div>
    </AnimatePresence>
  );
};
