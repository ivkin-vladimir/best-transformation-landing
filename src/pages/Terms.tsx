
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
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
          <h1 className="text-3xl md:text-4xl text-best-purple mb-8 font-playfair">Условия использования</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">1. Общие положения</h2>
              <p>
                Настоящие Условия использования (далее — «Условия») определяют правила использования сайта ivkin.me (далее — «Сайт») и предоставляемых на нем услуг.
              </p>
              <p className="mt-2">
                Используя Сайт, вы принимаете настоящие Условия полностью и безоговорочно. Если вы не согласны с Условиями, вам следует прекратить использование Сайта.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">2. Цель Сайта</h2>
              <p>
                Сайт создан с целью предоставления информации о методе BEST-психопунктуры и услугах, предоставляемых Владимиром Ивкиным.
              </p>
              <p className="mt-2">
                Информация, размещенная на Сайте, предназначена исключительно для ознакомительных целей и не является заменой профессиональной психологической, медицинской или иной консультации.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">3. Интеллектуальная собственность</h2>
              <p>
                Все материалы, размещенные на Сайте, включая тексты, изображения, логотипы, элементы дизайна и программный код, являются объектами интеллектуальной собственности и защищены законодательством об авторском праве.
              </p>
              <p className="mt-2">
                Любое использование материалов Сайта без предварительного письменного согласия правообладателя запрещено и преследуется в соответствии с законодательством РФ.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">4. Ответственность</h2>
              <p>
                Владелец Сайта не несет ответственности за любые прямые или косвенные убытки, возникшие вследствие использования или невозможности использования Сайта.
              </p>
              <p className="mt-2">
                Сайт предоставляется на условиях «как есть», без каких-либо гарантий, явных или подразумеваемых.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">5. Обработка персональных данных</h2>
              <p>
                При использовании Сайта, вы соглашаетесь с обработкой своих персональных данных в соответствии с Политикой конфиденциальности, размещенной на Сайте.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl text-best-purple mb-4 font-semibold">6. Изменение Условий</h2>
              <p>
                Владелец Сайта оставляет за собой право в одностороннем порядке изменять настоящие Условия. Изменения вступают в силу с момента публикации на Сайте, если иное не указано в новой редакции Условий.
              </p>
              <p className="mt-2">
                Пользователь обязуется регулярно проверять Условия на предмет изменений. Продолжение использования Сайта после внесения изменений означает согласие с новыми Условиями.
              </p>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-best-darkGray">
              По всем вопросам, связанным с использованием Сайта, обращайтесь по адресу электронной почты: vladimir@ivkin.me
            </p>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Terms;
