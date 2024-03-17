import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


// Animation
import { fadeDown, fadeUp } from '@/animations/fade';

// Component
import TextInput from '../atom/TextInput';
import TextAreaInput from '../atom/TextAreaInput';
import Footer from './Footer';

interface EmailFormProps {
  name: string,
  email: string,
  message: string
}

const Contact = () => {
  // Page loading state
  const [loading, setLoading] = useState<boolean>(true);

  // Handle page loading
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '')
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  // Email form data
  const [form, setForm] = useState<EmailFormProps>({
    name: '',
    email: '',
    message: ''
  });

  // Send message state
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle submit message
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsError(false);
    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';

    try {
      setIsLoading(true);

      await emailjs.send(serviceId, templateId, {
        sender_name: form.name,
        sender_email: form.email,
        message: form.message
      });
      
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return loading ? 
  ( 
    <div></div> 
  ) :
  (
    <div className='w-full flex flex-col gap-7 md:gap-14 items-center'>

      <motion.h2 
        className='w-fit abril-fatface-regular text-purple-to-blue text-5xl text-center'
        custom={0}
        variants={fadeDown}
        initial="enter"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Let's talk about something big
      </motion.h2>

      <div className='w-full h-full flex flex-col gap-32 items-center bg-blue-ellipse bg-no-repeat bg-top'>
        <form 
          className='max-w-[500px] w-11/12 flex flex-col gap-5 items-center'
          onSubmit={handleSubmit}
        >
          <motion.div
            className='w-full'
            custom={1}
            variants={fadeUp}
            initial="enter"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <TextInput
              label='Name'
              type='text'
              name='name'
              placeholder='What should I call you?'
              value={form.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            className='w-full'
            custom={2}
            variants={fadeUp}
            initial="enter"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <TextInput
              label='Email'
              type='email'
              name='email'
              placeholder='Where can I reach you?'
              value={form.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            className='w-full'
            custom={3}
            variants={fadeUp}
            initial="enter"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <TextAreaInput 
              label='Message'
              name='message'
              placeholder='Your message goes here'
              value={form.message}
              onChange={handleChange}
            />
          </motion.div>

          <motion.button 
            className={`relative w-fit h-fit mt-3 group ${isSuccess || isError || isLoading ? '' : 'cursor-pointer'}`}
            type='submit'
            custom={4}
            variants={fadeUp}
            initial="enter"
            whileInView="animate"
            whileTap={{ scale: isSuccess || isError ? 1 : 0.9 }}
            viewport={{ once: true }}
            disabled={isSuccess || isLoading || isError}
          >
            <div className={`opacity-0 absolute inset-0 bg-gradient-to-r ${isError ? 'from-red-500 to-red-300' : 'from-blue_main to-tosca_main'} blur-md rounded-lg transition-opacity duration-500 ease-in-out ${isSuccess || isError ? 'opacity-70' : ''} ${isSuccess || isLoading ? '' : 'group-hover:opacity-70'}`}></div>
            <div className={`relative w-[170px] h-fit py-2 flex items-center justify-center ${isSuccess ? 'text-white bg-emerald-600' : isError ? 'text-white bg-red-500' : 'text-black bg-white'} poppins-bold rounded-lg transition-all duration-1000 ease-in-out`}>
              {
                isLoading ?
                <span>Sending...</span> :
                isError ?
                <span>Error. Try again</span> :
                isSuccess ?
                <span>Message sent</span> :
                <span>Send</span>
              }
            </div>
          </motion.button>

        </form>

        <Footer />
      </div>

    </div>
  );
};

export default Contact;