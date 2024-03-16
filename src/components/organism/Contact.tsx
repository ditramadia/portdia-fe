import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Asset
import BlueEllipes from '@public/images/blue-ellipse.png';

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

      <div className='relative w-full h-fit mt-24 pt-5 flex flex-col items-center gap-32'>
        <div className='max-w-[500px] w-11/12 flex flex-col gap-5 items-center'>
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

          <div className='relative w-fit h-fit mt-3 group'>
            <div className='opacity-0 absolute inset-0 bg-gradient-to-r from-blue_main to-tosca_main blur-md rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-70'></div>
            <div className='relative w-[170px] h-fit py-2 flex items-center justify-center rounded-lg bg-white cursor-pointer transition-all duration-150 ease-in-out active:scale-95'>
              <span className='text-black poppins-medium'>Send</span>
            </div>
          </div>

        </div>

        <Footer />

        <Image className='absolute -z-[10] max-w-[950px] w-full ml-auto mr-auto' src={BlueEllipes} alt='Big ellipse' fill style={{objectFit: "cover", objectPosition: 'top'}}/>
      
      </div>

    </div>
  );
};

export default Contact;