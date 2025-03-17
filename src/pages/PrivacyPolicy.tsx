
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-neuro-dark text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Политика конфиденциальности</h1>
          
          <div className="space-y-8 neo-glass p-8 rounded-xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая политика конфиденциальности описывает, как ИП Ивкин В.И. собирает, использует и защищает информацию, полученную от пользователей сайта ivkin.me.
              </p>
              <p>
                Используя наш сайт, вы соглашаетесь с условиями данной политики конфиденциальности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Сбор и использование информации</h2>
              <p className="mb-4">
                Мы собираем личную информацию, которую вы предоставляете добровольно при заполнении форм на нашем сайте, включая ваше имя, контактные данные и информацию, связанную с вашими запросами.
              </p>
              <p>
                Эта информация используется для связи с вами и предоставления запрошенных услуг, а также для улучшения нашего сайта и опыта пользователей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Защита информации</h2>
              <p className="mb-4">
                Мы принимаем соответствующие меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
              <p>
                Однако, помните, что ни один метод передачи через Интернет или метод электронного хранения не является 100% безопасным.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Раскрытие информации третьим лицам</h2>
              <p>
                Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для предоставления запрошенной услуги или когда это требуется по закону.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Файлы cookie</h2>
              <p>
                Наш сайт может использовать "cookies" для улучшения опыта пользователей. Вы можете настроить свой браузер так, чтобы отказаться от получения всех cookies или уведомлять о их отправке, однако это может помешать правильной работе некоторых функций сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Изменения в политике конфиденциальности</h2>
              <p>
                ИП Ивкин В.И. имеет право обновлять данную политику конфиденциальности в любое время. Мы рекомендуем пользователям периодически проверять эту страницу на наличие изменений.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Контактная информация</h2>
              <p>
                Если у вас возникли вопросы по поводу политики конфиденциальности, вы можете связаться с нами по электронной почте: <a href="mailto:vladimir@ivkin.me" className="text-accent hover:underline">vladimir@ivkin.me</a>
              </p>
            </section>
          </div>

          <div className="mt-8 text-center text-white/60">
            <p>Последнее обновление: 1 июня 2023 г.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
