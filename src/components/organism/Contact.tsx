import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Animation
import { fadeDown, fadeUp } from '@/animations/fade';

// Component
import TextInput from '../atom/TextInput';
import TextAreaInput from '../atom/TextAreaInput';

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  });

  return loading ? 
  ( 
    <div></div> 
  ) :
  (
    <div className='w-full mb-32 flex flex-col gap-7 md:gap-14 items-center'>

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

      <div className='max-w-[500px] w-11/12 flex flex-col gap-5 items-center'>
        <motion.div
          className='w-full'
          custom={1}
          variants={fadeUp}
          initial="enter"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <TextInput
            label='Email'
            type='email'
            name='email'
            placeholder='Your email'
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
            label='Subject'
            type='text'
            name='subject'
            placeholder='The subject'
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
            placeholder='Your message here'
          />
        </motion.div>

        <motion.div 
          className='relative w-fit h-fit mt-3 group'
          custom={4}
          variants={fadeUp}
          initial="enter"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className='opacity-0 absolute inset-0 bg-gradient-to-r from-blue_main to-tosca_main blur-md rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-70'></div>
          <div className='relative w-[170px] h-fit py-2 flex items-center justify-center rounded-lg bg-white cursor-pointer transition-all duration-150 ease-in-out active:scale-95'>
            <span className='text-black poppins-medium'>Send</span>
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default Contact;