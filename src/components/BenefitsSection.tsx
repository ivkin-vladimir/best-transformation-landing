
import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Глубокое понимание себя",
      description: "Осознание своего типа психики, сильных и слабых сторон личности",
      icon: "🧠"
    },
    {
      title: "Выявление причин проблем",
      description: "Понимание, почему в жизни возникла проблема и путей её преодоления",
      icon: "🔍"
    },
    {
      title: "Персональный план развития",
      description: "Индивидуальные рекомендации для саморазвития и личностного роста",
      icon: "📋"
    },
    {
      title: "Инструменты самопомощи",
      description: "Практические техники для поддержания достигнутого результата",
      icon: "🛠️"
    },
    {
      title: "Новый взгляд на жизнь",
      description: "Расширение сознания и трансформация восприятия действительности",
      icon: "👁️"
    }
  ];

  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Что вы получите после консультации
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-best-cream rounded-lg p-6 border-b-4 border-best-gold hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-best-purple mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
