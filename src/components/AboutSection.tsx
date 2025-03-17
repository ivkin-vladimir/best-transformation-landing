
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container bg-neuro-mid">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center mb-20 decorative-line tracking-tight text-glow"
        >
          Владимир Ивкин — ваш проводник к самопознанию
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 order-1 md:order-2"
          >
            <div className="relative animated-border p-1 rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/37b5ef41-2688-4302-b466-688ef165d1a9.png" 
                alt="Владимир Ивкин" 
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="font-heading text-white font-bold">Владимир Ивкин</p>
                <p className="text-sm text-white/80">Психолог, ученик профессора Халлима Калера</p>
              </div>
            </div>
          </motion.div>
          
          <div className="md:col-span-3 order-2 md:order-1 neo-glass p-8">
            <h3 className="text-2xl text-gradient mb-6">Профессиональный опыт</h3>
            <p className="text-lg mb-6 text-white/80">
              Владимир Ивкин — психолог с более чем 15-летним стажем в области психологической диагностики и коррекции. Является учеником профессора Халлима Калера и одним из немногих специалистов, практикующих метод BEST-психопунктуры.
            </p>
            
            <h3 className="text-2xl text-gradient mb-6">Философия работы</h3>
            <p className="text-lg mb-6 text-white/80">
              "Мой подход основан на глубоком уважении к уникальности каждого человека. Я верю, что все ответы уже есть внутри нас — задача специалиста помочь их обнаружить и активировать врожденные механизмы саморегуляции."
            </p>
            
            <blockquote className="neo-glass p-6 border-l-4 border-accent italic text-lg mb-6">
              <p className="text-white/90">"BEST-психопунктура — это не просто диагностика, а мощный инструмент трансформации, который помогает увидеть корневые причины проблем и открывает путь к их решению."</p>
            </blockquote>
            
            <div className="text-lg text-white/80">
              <p>Email: <a href="mailto:vladimir@ivkin.me" className="text-accent hover:text-accent/80 transition-colors">vladimir@ivkin.me</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
