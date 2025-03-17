import emailjs from '@emailjs/browser';

interface EmailFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  captchaToken?: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData: EmailFormData): Promise<boolean> => {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      to_email: 'consultation@ivkin.me'
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully!', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
