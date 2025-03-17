
import React, { useState } from 'react';
import { Check, MapPin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const BookingSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для подтверждения",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const paymentMethods = [
    "Наличные", "Банковская карта", "Перевод по СБП", "Безналичный расчет"
  ];

  return (
    <section id="booking" className="section-container bg-gradient-to-b from-white to-best-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Сделайте первый шаг к гармонии и самопознанию
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-best-purple mb-6">Запись на консультацию</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-best-purple focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-best-purple focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-best-purple focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">Предпочтительная дата</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-best-purple focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">Предпочтительное время</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-best-purple focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Сообщение (необязательно)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-best-purple focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={cn(
                  "w-full cta-button text-lg",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Записаться на консультацию"}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-best-purple mb-6">Информация о сеансах</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-best-purple mb-3">Стоимость консультации</h4>
                <p className="text-2xl font-bold text-best-gold mb-2">8 000 ₽</p>
                <p className="text-gray-600">Полная консультация с диагностикой и интерпретацией (2-3 часа)</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-best-purple mb-3">Способы оплаты</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {paymentMethods.map((method, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={18} className="text-best-gold mr-2" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-best-purple mb-3">Место проведения</h4>
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="text-best-purple mr-2 mt-1 flex-shrink-0" />
                  <p>г. Санкт-Петербург, ул. Примерная, д. 123, офис 45</p>
                </div>
                
                <div className="rounded-lg overflow-hidden h-40 mt-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036559503178!2d30.3122806158057!3d59.93837499880945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1684930405929!5m2!1sru!2sru" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-best-purple mb-6">Контактная информация</h3>
              
              <div className="flex items-center mb-4">
                <Phone size={18} className="text-best-purple mr-3" />
                <a href="tel:+79000000000" className="hover:text-best-purple transition-colors">
                  +7 (900) 000-00-00
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail size={18} className="text-best-purple mr-3" />
                <a href="mailto:contact@best-psycho.ru" className="hover:text-best-purple transition-colors">
                  contact@best-psycho.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
