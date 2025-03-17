
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full text-left py-5 flex items-center justify-between focus:outline-none"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium text-foreground">{question}</h3>
        <ChevronDown 
          className={cn(
            "text-primary transition-transform duration-300",
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 mb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-foreground/80">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Сколько времени занимает консультация?",
      answer: "Полная консультация с диагностикой и интерпретацией занимает около 2-3 часов. Это позволяет глубоко погрузиться в ваш запрос и провести полноценную работу с методом BEST-психопунктуры."
    },
    {
      question: "Нужно ли готовиться к сеансу?",
      answer: "Специальной подготовки не требуется. Рекомендуется прийти в спокойном состоянии и с открытостью к получению новой информации о себе. Полезно заранее сформулировать вопросы или проблемы, которые вы хотели бы решить."
    },
    {
      question: "Что такое шаманские фигурки и как они работают?",
      answer: "Шаманские фигурки – это специально изготовленные символические объекты, которые выступают проекцией внутренних процессов человека. Работа с ними позволяет визуализировать и осознать бессознательные паттерны и эмоциональные состояния. Каждая фигурка имеет свое значение и отражает определенный аспект психики."
    },
    {
      question: "Подходит ли метод детям и подросткам?",
      answer: "Метод адаптирован для работы с клиентами от 16 лет. Для младшего возраста предлагаются модифицированные версии диагностики. При работе с подростками рекомендуется консультация родителей."
    },
    {
      question: "Существуют ли противопоказания?",
      answer: "Метод не рекомендуется при острых психотических состояниях и тяжелых психических расстройствах. В случае сомнений, пожалуйста, проконсультируйтесь предварительно с вашим лечащим врачом или напишите Владимиру для уточнения деталей."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-foreground text-center mb-16 decorative-line">
          Часто задаваемые вопросы
        </h2>
        
        <div className="neo-glass rounded-xl shadow-md">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
