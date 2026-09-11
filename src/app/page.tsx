"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import WelcomeScreen from "@/components/WelcomeScreen";
import ParticlesBackground from "@/components/ParticlesBackground";
import { menuData, categories, CategoryId } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = menuData.filter(item => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sections = activeCategory === 'todos'
    ? categories.filter(c => c.id !== 'todos')
    : [categories.find(c => c.id === activeCategory)!];

  return (
    <main className="min-h-screen selection:bg-gold-500/30 bg-[var(--color-brand-emerald-900)] relative">
      <WelcomeScreen />
      <ParticlesBackground />
      
      <div className="relative z-10">
        <Hero />
        
        {/* Menu Intro & Search (Original Layout) */}
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient tracking-wide mb-4 drop-shadow-md"
          >
            ¿Qué se te antoja hoy?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-emerald-50/60 font-light mb-8"
          >
            Explora nuestras delicias
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative max-w-md mx-auto mb-8"
            data-cursor-hover="true"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gold-500/70" />
            </div>
            <input
              type="text"
              placeholder="Buscar un plato, bebida..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-3 border border-gold-500/30 rounded-full leading-5 text-emerald-50 placeholder-emerald-50/50 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 sm:text-base transition-all shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:border-gold-500/60"
              style={{ backgroundColor: 'var(--color-surface-glass)' }}
            />
          </motion.div>
        </div>
        
        {/* Sticky Navigation (Luxury Floating Style) */}
        <div className="sticky top-4 z-50 px-4 md:px-6 flex justify-center pointer-events-none">
          <div 
            className="backdrop-blur-2xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-full pointer-events-auto max-w-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-surface-glass)' }}
          >
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-2 py-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id as CategoryId);
                    if (typeof window !== 'undefined') {
                      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                    }
                  }}
                  className={`relative px-4 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 whitespace-nowrap ${
                    activeCategory === category.id
                      ? "text-gold-400"
                      : "text-emerald-50/50 hover:text-emerald-50/90"
                  }`}
                  data-cursor-hover="true"
                >
                  <span className="relative z-10">{category.name}</span>
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="pb-32 min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {sections.map(section => {
                const sectionItems = filteredData.filter(item => item.category === section.id);
                if (sectionItems.length === 0) return null;
                return (
                  <MenuSection 
                    key={section.id} 
                    id={section.id} 
                    title={section.name} 
                    items={sectionItems} 
                  />
                );
              })}
              {filteredData.length === 0 && (
                <div className="py-24 text-center text-emerald-50/50 font-sans">
                  No se encontraron resultados para "{searchQuery}"
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
