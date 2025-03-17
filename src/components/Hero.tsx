
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center grid-mesh"
    >
      <div className="absolute inset-0 bg-neuro-dark bg-opacity-80 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-block"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              Авангардный метод самопознания
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-glow"
          >
            <span className="text-gradient">Трансформация</span> личности <br/> за один сеанс
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto"
          >
            Метод <span className="text-gradient font-bold">BEST-психопунктуры</span> открывает доступ к глубинным структурам психики и заменяет годы классического психоанализа
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <a 
              href="#booking" 
              className="cta-button text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Обрести гармонию сейчас</span>
            </a>
            
            <a 
              href="#method" 
              className="bg-transparent border border-white/20 hover:border-white/40 text-white py-3 px-8 rounded-full transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Узнать о методе
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#method" aria-label="Scroll to learn more" className="text-white/50 hover:text-white transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </motion.div>
      
      {/* Floating circle decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
