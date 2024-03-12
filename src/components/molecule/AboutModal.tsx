import React from 'react';
import Image from 'next/image';
import { AnimatePresence, Variants, motion } from 'framer-motion';

// Asset
import CloseIcon from '@public/icons/close-ic.svg';

interface AboutModalProps {
  active: string
  showModal: boolean
  closeModal: () => void
};

const AboutModal = (props: AboutModalProps) => {
  const { active, showModal, closeModal } = props;

  const activeClass = 'bg-purple_main';

  const modalVariants: Variants = {
    enter: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.75
      }
    }
  };

  const contentVariants: Variants = {
    enter: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.75
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <AnimatePresence>
      {
        showModal &&
        <motion.div 
          key="modal"
          className='overflow-y-auto pt-16 pb-10 fixed z-[10] inset-0 flex justify-center bg-black bg-opacity-90 md:bg-opacity-70 md:backdrop-blur md:pt-32'
          variants={modalVariants}
          initial="enter"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className='max-w-[1200px] w-11/12 flex flex-col gap-8'
            variants={contentVariants}
            initial="enter"
            animate="animate"
            exit="exit"
          >
            <div className='absolute top-7 right-7 w-[24px] h-[24px] cursor-pointer transition-transform ease-in-out duration-300 hover:rotate-180' onClick={closeModal}>
              <Image src={CloseIcon} alt='Close icon' fill/>
            </div>

            <h1 className='abril-fatface-regular text-white text-5xl'>
              More about me<span className='text-purple_main'>.</span>
            </h1>

            <div className='flex flex-col gap-4'>
              <p className='poppins-light text-white text-left'>
                Greetings, I'm <span className='text-tosca_main'>Ditra Amadia</span>, a <span className='text-tosca_main'>developer</span> from <span className='text-tosca_main'>Bandung, Indonesia</span>.
              </p>
              <p>
                <span className={`poppins-light text-white text-left ${active === 'creativity' ? activeClass : ''}`}>
                  I have loved drawing since I was a child, expressing anything I think and feel. Until I got my hands on computers, I changed courses to <span className={`poppins-light text-white text-left ${active === 'skills' ? activeClass : ''}`}>photography, video editing, graphic design, and motion graphics. I tried learning 3D graphics, such as computer graphics and interior design, but never had the time to master it.</span>
                </span>
              </p>
              <p className='poppins-light text-white text-left'>
                <span className={`poppins-light text-white text-left ${active === 'dev' ? activeClass : ''}`}>I started my web development journey in 2018, back when Flexbox wasn't around (yes, I'm flexing ( ͡° ͜ʖ ͡°)), mastering HTML, CSS, JavaScript, and its friends.</span> <span className={`poppins-light text-white text-left ${active === 'itb' ? activeClass : ''}`}>Then, in 2021, when I got enrolled in computer science at ITB, I started learning various concepts and technologies related to <span className={`poppins-light text-white text-left ${active === 'skills' ? activeClass : ''}`}>data structures, algorithms, networks, databases, IT management, software development, artificial intelligence, machine learning, and much more</span></span>. <span className={`poppins-light text-white text-left ${active === 'dev' ? activeClass : ''}`}>But the specialty I'm focusing on is web development, although mobile development seems to catch my eye.</span>
              </p>
              <p>
                <span className={`poppins-light text-white text-left ${active === 'dev' ? activeClass : ''}`}>
                  <span className={`poppins-light text-white text-left ${active === 'skills' ? activeClass : ''}`}>
                  As for now, I'm mastering web development itself, learning new frameworks and architecture, and exploring anything I can get my hands on, as it seems there is no end to it.
                  </span>
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default AboutModal