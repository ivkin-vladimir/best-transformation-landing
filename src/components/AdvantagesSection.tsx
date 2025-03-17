
import React from 'react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      title: "Скорость результата",
      description: "Достижение за один сеанс того, на что обычно уходят годы психоанализа",
      icon: "⚡"
    },
    {
      title: "Глубина анализа",
      description: "Выявление не только сознательных, но и бессознательных процессов",
      icon: "🔍"
    },
    {
      title: "Комплексный подход",
      description: "Работа с физическим, психическим и духовным аспектами личности",
      icon: "🧩"
    },
    {
      title: "Индивидуальность",
      description: "Персонализированные рекомендации для каждого клиента",
      icon: "👤"
    },
    {
      title: "Наглядность",
      description: "Визуализация внутренних процессов через работу с фигурками",
      icon: "👁️"
    },
    {
      title: "Долгосрочный эффект",
      description: "Стойкие изменения после сеанса, влияющие на все сферы жизни",
      icon: "🔄"
    }
  ];

  return (
    <section id="results" className="section-container bg-best-purple text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-16 decorative-line">
          Преимущества метода BEST
        </h2>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              <span className="text-4xl mb-4 block">{advantage.icon}</span>
              <h3 className="text-xl font-bold mb-3 text-best-gold">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-best-gold">Сравнение с традиционными методами</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-3 text-left">Критерий</th>
                  <th className="px-4 py-3 text-left">BEST-психопунктура</th>
                  <th className="px-4 py-3 text-left">Обычная терапия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3">Количество сеансов</td>
                  <td className="px-4 py-3 text-best-gold">1-3 сеанса</td>
                  <td className="px-4 py-3">10-50+ сеансов</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Глубина диагностики</td>
                  <td className="px-4 py-3 text-best-gold">Бессознательные паттерны</td>
                  <td className="px-4 py-3">Преимущественно сознательный уровень</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Скорость изменений</td>
                  <td className="px-4 py-3 text-best-gold">Сразу после сеанса</td>
                  <td className="px-4 py-3">Постепенные изменения</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Интеграция психики</td>
                  <td className="px-4 py-3 text-best-gold">Комплексное воздействие</td>
                  <td className="px-4 py-3">Фокус на отдельных аспектах</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
