
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
    <section id="method" className="section-container bg-best-cream">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line"
        >
          Уникальный метод самопознания и трансформации
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6">
              <strong className="text-best-purple">BEST</strong> (Базовый Эмоциональный Структурирующий Тест) — это инновационный подход к диагностике и коррекции психологических состояний, сочетающий древние шаманские практики и современные психологические концепции.
            </p>
            <p className="text-lg mb-6">
              В основе метода лежит работа с десятью специальными шаманскими фигурками, которые становятся проекцией вашего внутреннего мира. Расположение фигурок на столе отражает структуру вашей психики, выявляя бессознательные паттерны, блоки и скрытые конфликты.
            </p>
            <p className="text-lg">
              BEST-психопунктура позволяет за один сеанс получить глубокое понимание вашей личности и обнаружить корневые причины психологических проблем, на изучение которых в традиционном психоанализе могли бы уйти годы.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1612520985631-83e13d022a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Шаманские фигурки для BEST-психопунктуры" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-best-purple mb-4">Процесс работы с шаманскими фигурками</h3>
            <ul className="space-y-3">
              {steps.map((step, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-flex items-center justify-center bg-best-purple text-white rounded-full w-6 h-6 text-sm mr-3 mt-0.5">{index + 1}</span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
