import React, { useEffect, useState } from 'react';
import { Variants, motion } from 'framer-motion';

// Asset
import DownloadIcon from '@public/icons/download-ic.svg';

// Components
import Button from '../atom/Button';
import TextLink from '../atom/TextLink';
import AboutModal from '../molecule/AboutModal';

const AboutSection = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  });

  const titleVariants: Variants = {
    enter: {
      opacity: 0,
      y: -20
    },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 1,
        delay: i * 0.2
      }
    })
  }

  const textVariants: Variants = {
    enter: {
      opacity: 0,
      x: -20
    },
    animate: i => ({
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
        duration: 1,
        delay: i * 0.2
      }
    })
  } 

  const buttonVariants: Variants = {
    enter: {
      opacity: 0
    },
    animate: i => ({
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
        delay: i * 0.2
      }
    })
  }

  const handleOpenModal = (category: string) => {
    setSelectedCategory(category);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setSelectedCategory('');
    setShowModal(false);
  }

  return loading ? 
  (
    <div></div>
  ) : 
  (
    <div className='w-11/12 pb-20 flex flex-col gap-7 md:gap-10 items-center'>

      <motion.h2 
        className='w-fit abril-fatface-regular text-purple-to-blue text-5xl'
        custom={0}
        variants={titleVariants}
        initial="enter"
        whileInView="animate"
      >
        About Me
      </motion.h2>

      <div className='w-full flex flex-col items-center gap-7 md:gap-8'>
        <div className='flex flex-col gap-1'>
          <motion.p 
            className='text-white poppins-thin text-center'
            custom={1}
            variants={textVariants}
            initial="enter"
            whileInView="animate"
          >
            Hello, I'm Ditra, a <TextLink text='full-stack developer' onClick={() => handleOpenModal('dev')}/> currently studying <TextLink text='computer science at ITB' onClick={() => handleOpenModal('itb')}/>.
          </motion.p>
          <motion.p 
            className='text-white poppins-thin text-center'
            custom={2}
            variants={textVariants}
            initial="enter"
            whileInView="animate"
          >
            I love to express my <TextLink text='skills' onClick={() => handleOpenModal('skills')} /> and <TextLink text='creativity' onClick={() => handleOpenModal('creativity')}/> through this website.
          </motion.p>
          <motion.p 
            className='text-white poppins-thin text-center'
            custom={3}
            variants={textVariants}
            initial="enter"
            whileInView="animate"
          > 
            Feel free to have a look and <TextLink text='contact me' /> about anything!
          </motion.p>
        </div>

        <motion.a 
          target="_blank" 
          href="https://drive.google.com/file/d/1CRswzCp9LZNwNbTxMcPSmIMR6LAXf0Ng/view?usp=sharing" 
          rel="noopener noreferrer"
          custom={4}
          variants={buttonVariants}
          initial="enter"
          whileInView="animate"
        >
          <div className='relative w-[150px] group'>
            <Button text='Resume' icon={DownloadIcon}/>
            <div className='absolute -z-10 -top-[140px] -right-[120px] w-[300px] h-[300px] rounded-full bg-gradient-radial from-blue_main to-transparent to-65% opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20'></div>
          </div>
        </motion.a>
      </div>

      <AboutModal active={selectedCategory} showModal={showModal} closeModal={handleCloseModal}/>

    </div>
  )
}

export default AboutSection