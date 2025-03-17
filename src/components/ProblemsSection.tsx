
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      category: "Личностные проблемы",
      items: ["Неуверенность в себе", "Низкая самооценка", "Трудности самоопределения", "Поиск своего призвания"],
      icon: "🧠"
    },
    {
      category: "Эмоциональные состояния",
      items: ["Тревожность", "Депрессия", "Эмоциональное выгорание", "Страхи и фобии"],
      icon: "❤️"
    },
    {
      category: "Отношения",
      items: ["Конфликты в семье", "Проблемы в личных отношениях", "Трудности в общении", "Детско-родительские отношения"],
      icon: "👥"
    },
    {
      category: "Профессиональная сфера",
      items: ["Карьерный кризис", "Профессиональное выгорание", "Принятие важных решений", "Конфликты на работе"],
      icon: "💼"
    },
    {
      category: "Экзистенциальные вопросы",
      items: ["Поиск смысла жизни", "Духовное развитие", "Преодоление жизненных кризисов", "Принятие изменений"],
      icon: "🔆"
    }
  ];

  return (
    <section id="problems" className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-foreground text-center mb-16 decorative-line"
        >
          Проблемы, которые решает BEST-психопунктура
        </motion.h2>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neo-glass p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{problem.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{problem.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {problem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#booking" className="cta-button">
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
