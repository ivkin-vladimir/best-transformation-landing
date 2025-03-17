
import React from 'react';
import { Check } from 'lucide-react';

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
    <section id="problems" className="section-container bg-gradient-to-b from-best-cream to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Проблемы, которые решает BEST-психопунктура
        </h2>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-best-lightGray"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{problem.icon}</span>
                <h3 className="text-xl font-bold text-best-purple">{problem.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {problem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Check size={18} className="text-best-gold mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
