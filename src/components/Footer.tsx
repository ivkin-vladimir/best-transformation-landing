
import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neuro-dark border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-gradient">BEST-психопунктура</h3>
            <p className="mb-6 text-white/70">
              Метод глубинной диагностики и трансформации личности, основанный на работе с шаманскими фигурками
            </p>
            <a href="#booking" className="text-accent hover:text-accent/80 font-medium transition-colors">
              Обрети гармонию сейчас
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-gradient">Контактная информация</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent" />
                <a href="mailto:vladimir@ivkin.me" className="hover:text-white transition-colors">
                  vladimir@ivkin.me
                </a>
              </li>
              <li className="mt-4">
                <p>
                  <a href="https://ivkin.me" className="text-accent hover:text-accent/80 transition-colors">ivkin.me</a>
                </p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-gradient">Навигация</h3>
            <ul className="grid grid-cols-2 gap-2 text-white/70">
              <li>
                <a href="#method" className="hover:text-white transition-colors">Метод</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">О Владимире</a>
              </li>
              <li>
                <a href="#author" className="hover:text-white transition-colors">Автор метода</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Процесс</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Результаты</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Записаться</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 mb-4 md:mb-0">
            © {currentYear} BEST-психопунктура. Все права защищены. ИП Ивкин В.И.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
