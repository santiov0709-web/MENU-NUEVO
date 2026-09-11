"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the welcome screen after 3.5 seconds to let the luxury sink in
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-brand-emerald-900)]"
        >
          {/* Particles dedicated to the welcome screen for cinematic depth */}
          <div className="absolute inset-0 z-0 opacity-40">
            <ParticlesBackground />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-4 w-full"
          >
            <motion.p
              initial={{ opacity: 0, y: 10, letterSpacing: "2px" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "12px" }}
              transition={{ delay: 0.4, duration: 2, ease: "easeOut" }}
              className="text-gold-300/80 uppercase text-[10px] md:text-xs font-sans font-light mb-6 ml-[12px]"
            >
              Bienvenidos a
            </motion.p>
            
            <div className="relative">
              {/* Massive Glow Behind Text */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute inset-0 bg-gold-500/20 blur-[60px] rounded-full"
              />
              
              <h1 className="relative font-serif text-6xl md:text-8xl lg:text-[10rem] font-bold text-transparent bg-clip-text pb-2 text-gold-gradient drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                Reserva
              </h1>
            </div>

            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] w-full max-w-sm bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-8 relative"
            >
              {/* Flare effect on the line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[1px] bg-white/50 blur-[2px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
