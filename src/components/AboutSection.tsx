
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Владимир Ивкин – ваш проводник к самопознанию
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl text-best-purple mb-6">Профессиональный опыт</h3>
            <p className="text-lg mb-6">
              Владимир Ивкин — опытный психолог с более чем 15-летним стажем работы в области психологической диагностики и коррекции. Автор метода BEST-психопунктуры, который успешно применяется для решения широкого спектра психологических проблем.
            </p>
            
            <h3 className="text-2xl text-best-purple mb-6">Философия работы</h3>
            <p className="text-lg mb-6">
              "Мой подход основан на глубоком уважении к уникальности каждого человека. Я верю, что все ответы уже есть внутри нас — задача специалиста помочь их обнаружить и активировать врожденные механизмы саморегуляции."
            </p>
            
            <blockquote className="border-l-4 border-best-gold pl-4 italic text-lg">
              "BEST-психопунктура — это не просто диагностика, а мощный инструмент трансформации, который помогает увидеть корневые причины проблем и открывает путь к их решению."
            </blockquote>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-best-gold rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Владимир Ивкин" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
              <div className="bg-white shadow-lg p-4 rounded absolute -bottom-6 -right-6 z-20 border border-best-lightGray">
                <p className="font-playfair text-best-purple font-bold">Владимир Ивкин</p>
                <p className="text-sm text-best-darkGray">Психолог, автор метода BEST-психопунктуры</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
