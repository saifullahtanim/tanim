"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface FadeRightProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  whileInView?: boolean;
}

export default function FadeRight({
  children,
  duration = 0.5,
  delay = 0,
  className = "",
  whileInView = false,
}: FadeRightProps) {
  const animation = {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ x: -40, opacity: 0 }}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
