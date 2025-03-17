
import React from 'react';
import { motion } from 'framer-motion';

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="results" className="section-container">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl text-foreground text-center mb-16 decorative-line">
          Что вы получите после консультации
        </h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="neo-glass rounded-lg p-6 border-b-4 border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <motion.span 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl mb-4"
                >
                  {benefit.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
