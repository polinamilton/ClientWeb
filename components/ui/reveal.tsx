"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function RevealGroup({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({
  className,
  children,
  index = 0,
  direction = "up",
}: {
  className?: string;
  children: ReactNode;
  index?: number;
  direction?: "up" | "left" | "right";
}) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -50 }
      : direction === "right"
        ? { opacity: 0, x: 50 }
        : { opacity: 0, y: 40 };

  const whileInView =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -120px 0px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
    >
      {children}
    </motion.div>
  );
}
