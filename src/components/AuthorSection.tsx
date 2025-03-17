
import React from 'react';
import { motion } from 'framer-motion';

const AuthorSection: React.FC = () => {
  return (
    <section id="author" className="section-container bg-best-lightGray">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-best-purple text-center mb-16 decorative-line">
          Создатель метода - выдающийся ученый с мировым именем
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl text-best-purple mb-6">Профессор Халлим Калер</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Индус, гражданин Индонезии, родился 29 июля 1935 года</span>
              </li>
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Доктор Медицины (MD), Доктор Философии (PhD), диплом Лейпцигского Университета (1963)</span>
              </li>
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Изучение Тропической Медицины, Гомеопатии, Дерматологии, Кардиологии, Семейной Медицины, Неврологии, Психоанализа и Акупунктуры в ведущих клиниках мира</span>
              </li>
            </ul>
            
            <h3 className="text-2xl text-best-purple mt-8 mb-6">Научный вклад</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Создание уникального психосинтетического теста БЭСТ (Базовый Эмоциональный Структурирующий Тест)</span>
              </li>
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Разработка метода Медитативной Психотерапии, признанного Всемирной Организацией Здравоохранения</span>
              </li>
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Синтез знаний из различных религиозных, философских и медицинских традиций</span>
              </li>
              <li className="flex items-start">
                <span className="text-best-gold mr-2">•</span>
                <span>Патент на метод под номером М 88 04 223.5</span>
              </li>
            </ul>
            
            <blockquote className="border-l-4 border-best-gold pl-4 italic text-lg mt-8">
              "Метод BEST-психопунктуры открывает доступ к Субэго - 'корню атмы' (души) индивида, что позволяет достичь глубокой трансформации личности за короткое время"
            </blockquote>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-best-gold rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Профессор Халлим Калер" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
              
              <div className="bg-white shadow-lg p-4 rounded absolute -bottom-6 -right-6 z-20 border border-best-lightGray">
                <h4 className="font-playfair text-best-purple font-bold mb-1">Международное признание</h4>
                <ul className="text-sm text-best-darkGray space-y-1">
                  <li>• Президент Международного Центра Акупунктуры и Психосоматики</li>
                  <li>• Председатель во Всемирной Ассоциации Динамической Психиатрии</li>
                  <li>• Президент Всемирной Ассоциации Психопунктуры</li>
                  <li>• Приглашённый профессор по Транскультуральной психологии в СПбГУ</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
