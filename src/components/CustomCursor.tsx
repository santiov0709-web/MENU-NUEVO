"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Only run on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor on clickable elements or elements with data-cursor-hover
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor-hover='true']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // We use Tailwind hidden md:block instead of window logic to avoid Next.js hydration mismatch
  if (!isMounted) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-gold-500/40 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 0.4)",
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.15
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-gold-400 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0
        }}
      />
    </>
  );
}
