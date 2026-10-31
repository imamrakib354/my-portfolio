"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    if (!ref.current || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    observer.observe(ref.current);
    setObserving(true);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${observing && !visible ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"} motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-reduce:!opacity-100 motion-reduce:!translate-y-0`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
