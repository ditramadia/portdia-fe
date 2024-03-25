import React from 'react';
import { motion } from 'framer-motion';

interface TextLinkProps {
  text: string,
  onClick?: () => void,
}

const TextLink = (props: TextLinkProps) => {
  const { text, onClick } = props;

  const textVariants = {
    enter: {
      width: 0,
      height: '2px'
    },
    animate: {
      width: '100%',
      transition: {
        delay: 1.8,
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    hover: {
      height: '23px',
      backgroundColor: '#7B46F3',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }
  
  return (
    <motion.span 
      className='inline-block relative cursor-pointer group'
      initial="enter"
      whileInView="animate"
      whileHover="hover"
      onClick={onClick}
      viewport={{ once: true }}
    >
      <motion.span 
        className='absolute -z-10 bottom-[1px] w-full h-[2px] bg-tosca_main' 
        variants={textVariants}
      />
      <span className='text-white poppins-thin text-center'>
        {text}
      </span>
    </motion.span>
  );
};

export default TextLink;