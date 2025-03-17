
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Первичное знакомство и выяснение запроса",
      description: "Определение основных вопросов и проблем, с которыми вы пришли на консультацию",
      icon: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      number: 2,
      title: "Диагностика с использованием теста BEST",
      description: "Работа с шаманскими фигурками, которые отражают структуру вашей психики",
      icon: "https://images.unsplash.com/photo-1612520985631-83e13d022a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      number: 3,
      title: "Интерпретация результатов и обсуждение",
      description: "Детальный разбор выявленных паттернов и их влияния на вашу жизнь",
      icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      number: 4,
      title: "Рекомендации и план дальнейших действий",
      description: "Конкретные предложения по трансформации выявленных паттернов и решению проблем",
      icon: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      number: 5,
      title: "Поддержка после консультации",
      description: "Ответы на возникающие вопросы и отслеживание прогресса изменений",
      icon: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <section id="process" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Процесс консультации
        </h2>
        
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[28px] top-10 bottom-10 w-1 bg-best-lightPurple/30 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex md:flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-best-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-full w-1 bg-best-lightPurple/30 mx-auto my-2 md:hidden"></div>
                  )}
                </div>
                
                <div className="bg-best-cream rounded-lg shadow-md overflow-hidden flex-grow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full">
                        <img 
                          src={step.icon} 
                          alt={`Step ${step.number}: ${step.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-best-purple mb-3">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#booking" className="cta-button">
            Обрети гармонию сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
