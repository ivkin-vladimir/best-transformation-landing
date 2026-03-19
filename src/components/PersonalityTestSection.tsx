
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const descriptions: Record<number, { mind: string; body: string; soul: string }> = {
  1: { mind: 'мягкий', body: 'нежный', soul: 'перфекционист — вы чувствуете любое несовершенство' },
  2: { mind: 'импульсивный', body: 'одержимый', soul: 'терпеливый' },
  3: { mind: 'ранимый', body: 'скованный', soul: 'жизнеспособный' },
  4: { mind: 'весёлый', body: 'выносливый', soul: 'серьёзный' },
  5: { mind: 'забывчивый', body: 'беспокойный', soul: 'решительный' },
  6: { mind: 'одержимый', body: 'стремительный', soul: 'осторожный' },
  7: { mind: 'спокойный', body: 'мягкий', soul: 'эмоциональный' },
  8: { mind: 'твёрдый', body: 'агрессивный', soul: 'депрессивный' },
  9: { mind: 'тревожный', body: 'чувствительный', soul: 'радостный' },
  10: { mind: 'волевой', body: 'возбудимый', soul: 'печальный' },
};

const PersonalityTestSection: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="personality-test" className="section-container bg-gradient-to-b from-neuro-mid to-neuro-dark">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center mb-6 decorative-line tracking-tight text-glow"
        >
          Знакомство с <span className="text-gradient">методом</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-4"
        >
          Доктор Х. Калер, автор психопунктуры, открыл закон, по которому можно, зная выражение лица, определить ваше истинное внутреннее состояние. Он показал, как взаимодействуют три разные энергии внутри человека: энергия тела, энергия ума и энергия души. То, что люди видят на вашем лице – всё это проявление одного лишь ума, вашей личности, которая есть маска (персона), скрывающая ваше истинное эмоциональное состояние. Вибрация души (истинные чувства) – вот главный, центральный предмет исследования. Вибрация тела так же весьма значительно влияет на сознание, на ум (личность).
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-white/60 mb-12 text-base md:text-lg"
        >
          Выберите один из десяти портретов, который эмоционально похож на вас:
        </motion.p>

        <div className="grid grid-cols-5 gap-3 md:gap-5 mb-8">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <motion.button
              key={num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: num * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelected(selected === num ? null : num)}
              className={`relative neo-glass p-1 md:p-2 rounded-xl cursor-pointer transition-all duration-300 group ${
                selected === num
                  ? 'ring-2 ring-primary shadow-lg shadow-primary/30 scale-105'
                  : 'hover:ring-1 hover:ring-primary/50 hover:scale-105'
              }`}
            >
              <img
                src={`/images/face-${num}.jpg`}
                alt={`Портрет ${num}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <span className={`absolute -bottom-1 -right-1 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full text-xs md:text-sm font-bold transition-colors duration-300 ${
                selected === num
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white/10 text-white/70 group-hover:bg-primary/30'
              }`}>
                {num}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="neo-glass p-6 md:p-8 rounded-xl mb-8 text-white/80 text-sm md:text-base space-y-3 leading-relaxed"
        >
          <p><span className="text-primary font-semibold">Если ваш выбор 1,</span> то на уровне ума вы мягкий человек, на уровне тела – нежный, на уровне души – перфекционист, вы чувствуете любое несовершенство.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 2,</span> то на уровне ума вы импульсивный человек, на уровне тела – одержимый, на уровне души – терпеливый.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 3,</span> то на уровне ума вы ранимый человек, на уровне тела – скованный, на уровне души – жизнеспособный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 4,</span> то на уровне ума вы весёлый человек, на уровне тела – выносливый, на уровне души – серьёзный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 5,</span> то на уровне ума вы забывчивый человек, на уровне тела – беспокойный, на уровне души – решительный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 6,</span> то на уровне ума вы одержимый человек, на уровне тела – стремительный, на уровне души – осторожный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 7,</span> то на уровне ума вы спокойный человек, на уровне тела – мягкий, на уровне души – эмоциональный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 8,</span> то на уровне ума вы твёрдый человек, на уровне тела – агрессивный, на уровне души – депрессивный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 9,</span> то на уровне ума вы тревожный человек, на уровне тела – чувствительный, на уровне души – радостный.</p>
          <p><span className="text-primary font-semibold">Если ваш выбор 10,</span> то на уровне ума вы волевой человек, на уровне тела – возбудимый, на уровне души – печальный.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="neo-glass p-6 md:p-8 rounded-xl max-w-2xl mx-auto text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gradient mb-6">Портрет №{selected}</h3>
              <div className="space-y-3 text-white/80 text-base md:text-lg">
                <p><span className="text-primary font-semibold">Ум:</span> {descriptions[selected].mind}</p>
                <p><span className="text-primary font-semibold">Тело:</span> {descriptions[selected].body}</p>
                <p><span className="text-primary font-semibold">Душа:</span> {descriptions[selected].soul}</p>
              </div>
              <p className="mt-6 text-sm text-white/50">
                Точная диагностика возможна при тестировании непосредственно на фигурках BEST
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalityTestSection;
