
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-neuro-dark text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Условия использования</h1>
          
          <div className="space-y-8 neo-glass p-8 rounded-xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Общие положения</h2>
              <p className="mb-4">
                Настоящие Условия использования регулируют отношения между ИП Ивкин В.И. (далее – «мы», «нас» или «наш») и любым лицом (далее – «вы» или «пользователь»), получающим доступ к сайту ivkin.me.
              </p>
              <p>
                Используя наш сайт, вы подтверждаете, что прочитали, поняли и соглашаетесь соблюдать данные Условия использования.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Интеллектуальная собственность</h2>
              <p>
                Весь контент на сайте, включая тексты, графику, логотипы, иконки, изображения, аудио- и видеоклипы, цифровые загрузки и компиляции данных, является собственностью ИП Ивкин В.И. или его поставщиков контента и защищен законами РФ и международными законами об интеллектуальной собственности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Использование сайта</h2>
              <p className="mb-4">
                Вы соглашаетесь использовать сайт только в законных целях и таким образом, который не нарушает права третьих лиц и не ограничивает или препятствует использованию и получению удовольствия от сайта любым другим пользователем.
              </p>
              <p>
                Запрещается использовать сайт в любых незаконных или мошеннических целях, а также для причинения неудобств или беспокойства другим лицам.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Ограничение ответственности</h2>
              <p>
                Информация на сайте предоставляется "как есть", без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем точность, полноту или актуальность информации на сайте и не несем ответственности за любые ошибки или упущения в содержании.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Внешние ссылки</h2>
              <p>
                Наш сайт может содержать ссылки на внешние сайты. Мы не несем ответственности за содержание любого связанного сайта и не делаем никаких заявлений относительно содержания или точности материалов на таких сайтах.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Изменения условий</h2>
              <p>
                Мы оставляем за собой право изменять данные Условия использования в любое время. Продолжая использовать сайт после публикации изменений, вы принимаете и соглашаетесь с этими изменениями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Применимое право</h2>
              <p>
                Настоящие Условия регулируются и толкуются в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Контактная информация</h2>
              <p>
                Если у вас возникли вопросы или комментарии относительно данных Условий использования, вы можете связаться с нами по электронной почте: <a href="mailto:vladimir@ivkin.me" className="text-accent hover:underline">vladimir@ivkin.me</a>
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

export default Terms;
