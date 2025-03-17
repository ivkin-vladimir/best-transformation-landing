
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Мария",
    age: 34,
    profession: "менеджер",
    text: "Я пришла к Владимиру в состоянии глубокого эмоционального выгорания. Работа занимала всё моё время, отношения с близкими испортились. После сеанса BEST-психопунктуры я смогла увидеть корень проблемы – детскую травму, из-за которой постоянно пыталась доказать свою ценность через работу. Сейчас, спустя три месяца, я нашла баланс между работой и личной жизнью, восстановила отношения с семьей и чувствую себя значительно счастливее.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    rating: 5
  },
  {
    name: "Алексей",
    age: 42,
    profession: "предприниматель",
    text: "Мой бизнес был успешным, но я ощущал внутреннюю пустоту и отсутствие смысла. Владимир с помощью метода BEST помог мне осознать, что я живу по сценарию, навязанному родителями, а не следую своим истинным желаниям. Работа с шаманскими фигурками выявила мой подавленный творческий потенциал. Сейчас я развиваю новое направление в бизнесе, связанное с искусством, и наконец чувствую внутреннюю гармонию.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    rating: 5
  },
  {
    name: "Елена",
    age: 29,
    profession: "психолог",
    text: "Как профессиональный психолог, я скептически относилась к экспресс-методам, но решила испытать BEST на себе. Результат превзошел все ожидания – метод выявил глубокие паттерны, которые я не осознавала даже после длительной работы с супервизором. Особенно ценным оказалось то, что Владимир не только диагностировал проблему, но и дал конкретные инструменты для её решения. Теперь рекомендую этот метод своим коллегам.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-accent' : 'text-muted'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-foreground text-center mb-16 decorative-line">
          Истории успеха наших клиентов
        </h2>
        
        <div className="relative neo-glass rounded-xl shadow-lg p-8 md:p-12">
          <Quote 
            size={60} 
            className="absolute text-primary/10 -top-6 -left-6 transform rotate-180"
          />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-foreground">
                {testimonials[currentIndex].name}
              </h3>
              
              <p className="text-foreground/70 text-sm">
                {testimonials[currentIndex].age} лет, {testimonials[currentIndex].profession}
              </p>
              
              <div className="flex mt-2">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-lg italic mb-6 text-foreground/90">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-accent' : 'bg-muted'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-6">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
