"use client";

import { motion } from "framer-motion";
import { MenuItemType } from "@/lib/data";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  id: string;
}

import { useEffect, useState } from "react";

export default function MenuSection({ title, items, id }: MenuSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }
  }, []);

  if (items.length === 0) return null;

  const MotionWrapper = isMobile ? "div" : motion.div;
  const motionProps = isMobile
    ? {}
    : {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" },
      };

  return (
    <section id={id} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <MotionWrapper {...(motionProps as any)} className="mb-16 flex items-end gap-6">
          <h2 className="font-serif text-5xl md:text-6xl text-gold-gradient tracking-wide whitespace-nowrap drop-shadow-lg pb-1">
            {title}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold-500/40 to-transparent mb-3" />
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
