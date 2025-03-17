
import React from 'react';
import { motion } from 'framer-motion';

const MethodSection: React.FC = () => {
  const steps = [
    "Выбор и расстановка фигурок на специальном поле",
    "Интерпретация позиций и взаимоотношений между фигурками",
    "Выявление ключевых паттернов и конфликтов",
    "Коррекционное воздействие и рекомендации"
  ];

  return (
    <section id="method" className="section-container bg-gradient-to-b from-neuro-dark to-neuro-mid">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center mb-20 decorative-line tracking-tight text-glow"
        >
          Метод самопознания <span className="text-gradient">нового поколения</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="neo-glass p-8"
          >
            <p className="text-lg mb-8 text-white/80">
              <span className="text-gradient font-bold">BEST</span> (Базовый Эмоциональный Структурирующий Тест) — это прорывной подход к диагностике психики, объединяющий древние шаманские традиции и современные достижения психологии.
            </p>
            <p className="text-lg mb-8 text-white/80">
              В процессе работы используется набор из десяти специальных шаманских фигурок, которые становятся проекцией внутреннего мира человека. Их расположение на поле отражает структуру психики, выявляя глубинные конфликты и ресурсы.
            </p>
            <p className="text-lg text-white/80">
              Уникальность метода в том, что за один сеанс можно достичь того, на что в классическом психоанализе уходят годы — выявить корневые причины психологических проблем и активировать процессы глубинной трансформации.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="neo-glass p-2"
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-square">
              <img 
                src="/lovable-uploads/f407248b-4f16-4d8e-8ff6-a9e770c16f0f.png" 
                alt="Шаманские фигурки для BEST-психопунктуры" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">Шаманские фигурки</h3>
                <p className="text-sm text-white/80">Уникальные инструменты диагностики внутреннего мира</p>
              </div>
            </div>
            
            <div className="space-y-2 p-6">
              <h3 className="text-xl font-bold text-gradient mb-6">Этапы работы с методом BEST</h3>
              <ul className="space-y-3">
                {steps.map((step, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <span className="inline-flex items-center justify-center bg-primary/20 text-primary border border-primary/30 rounded-full w-8 h-8 text-sm mr-3 mt-0.5 group-hover:bg-primary/30 transition-colors duration-300">{index + 1}</span>
                    <span className="text-white/80">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
