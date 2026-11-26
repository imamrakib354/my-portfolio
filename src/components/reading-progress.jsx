"use client";

import { motion, useScroll, useReducedMotion } from "motion/react";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[#c7ff76]" style={{ scaleX: scrollYProgress }} />;
}
