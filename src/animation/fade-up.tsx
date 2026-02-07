"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  whileInView?: boolean;
  className?: string;
}

export default function FadeUp({
  children,
  duration = 0.5,
  delay = 0,
  whileInView = false,
  className = "",
}: FadeUpProps) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ y: 60, opacity: 0 }}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
