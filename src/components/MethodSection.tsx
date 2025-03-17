
import React from 'react';

const MethodSection: React.FC = () => {
  return (
    <section id="method" className="section-container bg-best-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Уникальный метод самопознания и трансформации
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              <strong className="text-best-purple">BEST</strong> (Базовый Эмоциональный Структурирующий Тест) — это инновационный подход к диагностике и коррекции психологических состояний, сочетающий древние шаманские практики и современные психологические концепции.
            </p>
            <p className="text-lg mb-6">
              В основе метода лежит работа с десятью специальными шаманскими фигурками, которые становятся проекцией вашего внутреннего мира. Расположение фигурок на столе отражает структуру вашей психики, выявляя бессознательные паттерны, блоки и скрытые конфликты.
            </p>
            <p className="text-lg">
              BEST-психопунктура позволяет за один сеанс получить глубокое понимание вашей личности и обнаружить корневые причины психологических проблем, на изучение которых в традиционном психоанализе могли бы уйти годы.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1612520985631-83e13d022a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Шаманские фигурки для BEST-психопунктуры" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-best-purple mb-4">Процесс работы с шаманскими фигурками</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-best-purple text-white rounded-full w-6 h-6 text-sm mr-3 mt-0.5">1</span>
                <span>Выбор и расстановка фигурок на специальном поле</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-best-purple text-white rounded-full w-6 h-6 text-sm mr-3 mt-0.5">2</span>
                <span>Интерпретация позиций и взаимоотношений между фигурками</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-best-purple text-white rounded-full w-6 h-6 text-sm mr-3 mt-0.5">3</span>
                <span>Выявление ключевых паттернов и конфликтов</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-best-purple text-white rounded-full w-6 h-6 text-sm mr-3 mt-0.5">4</span>
                <span>Коррекционное воздействие и рекомендации</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
