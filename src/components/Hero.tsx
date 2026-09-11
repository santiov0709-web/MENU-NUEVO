"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!heroRef.current || !titleRef.current || !bgRef.current) return;

    // Asymmetrical parallax effect
    gsap.to(titleRef.current, {
      y: 150,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(bgRef.current, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* We rely on the global body background for the unified rich green */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 space-y-6"
      >
        <h1 ref={titleRef} className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight drop-shadow-xl text-gold-gradient uppercase tracking-[0.1em] md:tracking-widest pb-2">
          Reserva
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-gold-500/80 uppercase text-[9px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] md:tracking-widest font-sans font-light w-full px-2"
        >
          Experiencia Culinaria Excepcional
        </motion.p>
        
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0 mx-auto mt-8 md:mt-12" />
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-widest text-emerald-50/50 font-sans">Explorar</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-emerald-50/30"
        />
      </motion.div>
    </section>
  );
}
