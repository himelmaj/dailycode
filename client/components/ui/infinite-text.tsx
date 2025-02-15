"use client";

import { motion, useAnimationFrame } from "motion/react";
import { useRef } from "react";

type InfiniteTextProps = {
  text: string;
  speed?: number;
};

const InfiniteText = ({ text, speed = 0.5 }: InfiniteTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    x.current -= delta * speed; 
    
    if (x.current <= -100) x.current = 0;
  });

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <motion.div
        style={{
          x: `${x.current}%`,
          whiteSpace: "nowrap",
          display: "inline-flex",
          gap: "1rem" 
        }}
      >
        {[...Array(3)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteText;