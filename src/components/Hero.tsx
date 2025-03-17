
import React from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(42, 42, 92, 0.8), rgba(93, 56, 145, 0.8)), url("https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-best-blue/40 to-best-purple/40"></div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Трансформация личности за один сеанс с методом BEST-психопунктуры
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Познайте себя на глубинном уровне и найдите решения жизненных проблем с Владимиром Ивкиным
          </p>
          
          <p className="text-lg md:text-xl mb-10 opacity-80 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Уникальный диагностический метод с использованием древних шаманских практик, который за один сеанс заменяет годы психоанализа
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a 
              href="#booking" 
              className={cn(
                "cta-button",
                "inline-block text-lg md:text-xl mb-4"
              )}
            >
              Обрети гармонию сейчас
            </a>
            
            <p className="text-sm md:text-base opacity-80 mt-6">
              Персональные консультации в Санкт-Петербурге
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#method" aria-label="Scroll to learn more">
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
      </div>
    </section>
  );
};

export default Hero;
