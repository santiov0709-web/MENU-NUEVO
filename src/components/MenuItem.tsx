"use client";

import { motion } from "framer-motion";
import { MenuItemType } from "@/lib/data";
import { Crown, Award } from "lucide-react";
import { useEffect, useState } from "react";

export default function MenuItem({ item, index }: { item: MenuItemType, index: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }
  }, []);

  const motionProps = isMobile
    ? {
        initial: { opacity: 1 },
        whileInView: {},
        viewport: {},
        transition: {},
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.8, delay: (index % 5) * 0.1, ease: "easeOut" },
      };

  const Wrapper = isMobile ? "div" : motion.div;

  return (
    <Wrapper
      {...(motionProps as any)}
      className="group relative flex flex-col gap-2 p-5 md:p-6 border border-white/5 hover:border-gold-500/30 rounded-xl transition-all duration-700 cursor-none overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface-glass)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'
      }}
      data-cursor-hover="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="flex items-end gap-3 relative z-10 w-full">
        <h3 className="font-serif text-lg md:text-xl text-emerald-50/90 tracking-[0.03em] group-hover:text-gold-400 transition-colors duration-500 shrink-0">
          {item.title}
        </h3>
        <div className="flex-grow border-b-[1.5px] border-dotted border-white/20 relative top-[-6px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
        <span className="font-sans text-xs md:text-sm tracking-widest font-medium text-gold-500 shrink-0">
          {item.price}
        </span>
      </div>
      
      {item.badges && item.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1 relative z-10">
          {item.badges.map((badge, i) => (
            <span 
              key={i}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold border ${
                badge === 'Más Vendido' 
                  ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' 
                  : 'bg-gold-500/10 text-gold-400 border-gold-500/20'
              }`}
            >
              {badge === 'Más Vendido' ? <Crown size={12} className="mb-[1px]" /> : <Award size={12} className="mb-[1px]" />}
              {badge}
            </span>
          ))}
        </div>
      )}

      {item.description && (
        <p className="font-sans text-sm text-emerald-50/60 leading-relaxed mt-2 relative z-10 group-hover:text-emerald-50/80 transition-colors duration-300 max-w-lg">
          {item.description}
        </p>
      )}
    </Wrapper>
  );
}
