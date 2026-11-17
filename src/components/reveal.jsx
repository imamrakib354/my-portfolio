"use client";

import { useEffect } from "react";
import { useAnimate, useInView, useReducedMotion } from "motion/react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.08 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0 });
      return;
    }
    const controls = animate(scope.current, { opacity: [0, 1], y: [16, 0] }, {
      duration: 0.5,
      delay: Math.min(delay, 300) / 1000,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [animate, delay, inView, reducedMotion, scope]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
