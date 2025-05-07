
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

const BookingSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    
    setIsSubmitting(true);
    
    // Prepare the form data for submission
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    
    // Combine phone with message
    const combinedMessage = `Phone: ${formData.phone}\n\n${formData.message}`;
    formDataToSubmit.append('message', combinedMessage);
    
    try {
      // Submit the form data to Formspree using fetch
      const response = await fetch('https://formspree.io/f/xeogkeaw', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Show custom confirmation
        setShowConfirmation(true);
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        
        // Show success toast
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время для подтверждения",
          duration: 5000,
        });
      } else {
        // Show error toast if the submission failed
        toast({
          title: "Ошибка отправки",
          description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="section-container bg-best-purple text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white text-center mb-16 decorative-line"
        >
          Сделайте первый шаг к гармонии и самопознанию
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-bold text-best-gold mb-6">Запись на консультацию</h3>
            <p className="text-white/90 mb-6">
              Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время для обсуждения деталей консультации.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 bg-white/80"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-white mb-2">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 bg-white/80"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 bg-white/80"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Сообщение (необязательно)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 bg-white/80"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={cn(
                  "w-full cta-button text-lg group",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  {isSubmitting ? "Отправка..." : "Записаться на консультацию"}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="bg-white border border-best-gold">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-best-purple">Заявка отправлена!</DialogTitle>
            <DialogDescription className="text-gray-700 mt-4">
              Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время для подтверждения консультации.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSection;
