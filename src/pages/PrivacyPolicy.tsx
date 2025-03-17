
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl md:text-4xl text-best-purple mb-8 font-playfair">Политика конфиденциальности</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных физических лиц (далее – Пользователь), пользующихся сервисами сайта ivkin.me (далее – Сайт).
              </p>
              <p className="mt-2">
                Целью настоящей Политики является обеспечение надлежащей защиты информации о Пользователе, в т.ч. его персональных данных от несанкционированного доступа и разглашения.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">2. Персональные данные</h2>
              <p>
                При заполнении форм на Сайте, Пользователь предоставляет следующие персональные данные:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
              </ul>
              <p className="mt-2">
                Предоставляя свои персональные данные, Пользователь соглашается на их обработку в целях установления обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">3. Цели обработки персональных данных</h2>
              <p>Персональные данные Пользователя обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Установление обратной связи с Пользователем</li>
                <li>Подтверждение записи на консультацию</li>
                <li>Предоставление информации об услугах</li>
                <li>Улучшение качества работы сайта и предоставляемых услуг</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">4. Защита персональных данных</h2>
              <p>
                Администрация Сайта принимает необходимые и достаточные организационные и технические меры для защиты персональных данных Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ними третьих лиц.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">5. Права Пользователя</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Получать информацию, касающуюся обработки его персональных данных</li>
                <li>Требовать уточнения своих персональных данных, их блокирования или уничтожения</li>
                <li>Отозвать согласие на обработку персональных данных</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">6. Заключительные положения</h2>
              <p>
                Администрация Сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.
              </p>
              <p className="mt-2">
                Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.
              </p>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-best-darkGray">
              По всем вопросам, связанным с политикой конфиденциальности, обращайтесь по адресу электронной почты: vladimir@ivkin.me
            </p>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
