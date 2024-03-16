import React, { useEffect, useState } from 'react';

// Component
import TextInput from '../atom/TextInput';
import TextAreaInput from '../atom/TextAreaInput';
import Footer from './Footer';

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
    <div className='w-full flex flex-col gap-7 md:gap-10 items-center'>

      <h2 
        className='w-fit abril-fatface-regular text-purple-to-blue text-5xl text-center'
        // custom={0}
        // variants={titleVariants}
        // initial="enter"
        // whileInView="animate"
      >
        Let's talk about something big
      </h2>

      <div className='w-full h-fit overflow-y-hidden mt-24 pt-5 flex flex-col items-center gap-32'>
        <div className='max-w-[500px] w-11/12 flex flex-col gap-5'>
          <TextInput
            label='Email'
            type='email'
            name='email'
            placeholder='Your email'
          />
          <TextInput
            label='Subject'
            type='text'
            name='subject'
            placeholder='The subject'
          />
          <TextAreaInput 
            label='Message'
            name='message'
            placeholder='Your message here'
          />


        </div>

        <Footer />
      
      </div>

    </div>
  );
};

export default Contact;