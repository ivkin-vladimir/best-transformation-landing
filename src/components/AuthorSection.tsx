import React from 'react';
import { motion } from 'framer-motion';
const AuthorSection: React.FC = () => {
  return <section id="author" className="section-container bg-gradient-to-b from-neuro-mid to-neuro-dark">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-3xl md:text-5xl text-center mb-20 decorative-line tracking-tight text-glow">
          Создатель метода — выдающийся ученый с мировым именем
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="order-2 md:order-1 neo-glass p-8">
            <h3 className="text-2xl text-gradient mb-6">Профессор Халлим Калер</h3>
            <ul className="space-y-4 text-white/80">
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Индус, гражданин Индонезии, лся 29 июля 1935 года</span>
              </motion.li>
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Доктор Медицины (MD), Доктор Философии (PhD), диплом Лейпцигского Университета (1963)</span>
              </motion.li>
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Изучение Тропической Медицины, Гомеопатии, Дерматологии, Кардиологии, Семейной Медицины, Неврологии, Психоанализа и Акупунктуры</span>
              </motion.li>
            </ul>
            
            <h3 className="text-2xl text-gradient mt-8 mb-6">Научный вклад</h3>
            <ul className="space-y-4 text-white/80">
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Создание уникального психосинтетического теста БЭСТ (Базовый Эмоциональный Структурирующий Тест)</span>
              </motion.li>
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Разработка метода Медитативной Психотерапии, признанного Всемирной Организацией Здравоохранения</span>
              </motion.li>
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Патент на метод под номером М 88 04 223.5</span>
              </motion.li>
            </ul>
            
            <h3 className="text-2xl text-gradient mt-8 mb-6">Международное признание</h3>
            <ul className="space-y-4 text-white/80">
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.7
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Президент Международного Центра Акупунктуры и Психосоматики</span>
              </motion.li>
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Председатель во Всемирной Ассоциации Динамической Психиатрии</span>
              </motion.li>
              <motion.li initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.9
            }} viewport={{
              once: true
            }} className="flex items-start">
                <span className="text-accent mr-2 text-xl">•</span>
                <span>Президент Всемирной Ассоциации Психопунктуры</span>
              </motion.li>
            </ul>
            
            <motion.blockquote initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1
          }} viewport={{
            once: true
          }} className="neo-glass p-6 border-l-4 border-accent italic text-lg mt-8">
              <p className="text-white/90">"Метод BEST-психопунктуры открывает доступ к Субэго - 'корню атмы' (души) индивида, что позволяет достичь глубокой трансформации личности за короткое время"</p>
            </motion.blockquote>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="order-1 md:order-2 space-y-6">
            <div className="relative animated-border p-1 rounded-xl overflow-hidden">
              <img src="/lovable-uploads/6cd72384-fc81-41ae-8bd3-e457868a064d.png" alt="Профессор Халлим Калер" className="w-full rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <p className="font-heading text-white font-bold text-xl mb-1">Халлим Калер</p>
                    <p className="text-sm text-white/80">Доктор медицинских и философских наук</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe src="https://www.youtube.com/embed/K-_xz70zPd4" title="Профессор Халлим Калер - Видео" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="neo-glass p-4 card-hover-effect">
                <div className="text-3xl mb-2 text-accent">🧠</div>
                <h4 className="text-lg font-bold text-white mb-2">Психосинтез</h4>
                <p className="text-sm text-white/70">Интеграция различных психологических подходов в единую систему</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="neo-glass p-4 card-hover-effect">
                <div className="text-3xl mb-2 text-accent">🌍</div>
                <h4 className="text-lg font-bold text-white mb-2">Многокультурность</h4>
                <p className="text-sm text-white/70">Синтез восточных и западных традиций психологии</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.5
            }} viewport={{
              once: true
            }} className="neo-glass p-4 card-hover-effect">
                <div className="text-3xl mb-2 text-accent">⚕️</div>
                <h4 className="text-lg font-bold text-white mb-2">Медицина</h4>
                <p className="text-sm text-white/70">Интеграция медицинских и психологических подходов</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.6
            }} viewport={{
              once: true
            }} className="neo-glass p-4 card-hover-effect">
                <div className="text-3xl mb-2 text-accent">🔍</div>
                <h4 className="text-lg font-bold text-white mb-2">Инновации</h4>
                <p className="text-sm text-white/70">Разработка прорывных методов психодиагностики</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AuthorSection;