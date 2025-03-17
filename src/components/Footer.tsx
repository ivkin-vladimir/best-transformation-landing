
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-best-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">BEST-психопунктура</h3>
            <p className="mb-6 text-white/80">
              Метод глубинной диагностики и трансформации личности, основанный на работе с шаманскими фигурками
            </p>
            <a href="#booking" className="text-best-gold hover:text-best-lightGold font-medium transition-colors">
              Обрети гармонию сейчас
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Контактная информация</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-best-gold" />
                <a href="tel:+79000000000" className="hover:text-best-gold transition-colors">
                  +7 (900) 000-00-00
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-best-gold" />
                <a href="mailto:contact@best-psycho.ru" className="hover:text-best-gold transition-colors">
                  contact@best-psycho.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-best-gold mt-1 flex-shrink-0" />
                <span>г. Санкт-Петербург, ул. Примерная, д. 123, офис 45</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#method" className="hover:text-best-gold transition-colors">Метод</a>
              </li>
              <li>
                <a href="#about" className="hover:text-best-gold transition-colors">О Владимире</a>
              </li>
              <li>
                <a href="#process" className="hover:text-best-gold transition-colors">Процесс</a>
              </li>
              <li>
                <a href="#results" className="hover:text-best-gold transition-colors">Результаты</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-best-gold transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-best-gold transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-best-gold transition-colors">Записаться</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {currentYear} BEST-психопунктура. Все права защищены. ИП Ивкин В.И.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
