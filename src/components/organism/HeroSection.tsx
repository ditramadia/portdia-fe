'use client';

import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';

// Asset
import PortdiaLogo from '@public/images/portdia-main-glow.png';

const HeroSection = (): JSX.Element => {
  return (
    <div className="max-w-[900px] w-full pt-20 pb-40 h-fit flex flex-col gap-7 items-center md:pt-40 md:flex-row md:justify-between">
      <motion.div 
        className="relative w-20 h-20 md:w-[340px] md:h-[340px]"
        initial={{
          zIndex: 10,
          opacity: 0,
          x: 275
        }}
        animate={{
          x: [null, 275, 275, 275, 275, 0],
          opacity: [null, 1, 1, 1, 1, 1],
          transition: {
            duration: 4,
            ease: 'easeInOut'
          }
        }}
      >
        <Image src={PortdiaLogo} alt='Portdia logo' fill style={{objectFit: "contain"}}/>
      </motion.div>

      <div className="w-11/12 flex flex-col items-center gap-5 text-center md:w-fit md:items-start md:gap-10 md:text-left">
        <motion.h1 
          className='poppins-bold text-tosca_main'
          initial={{
            x: -50,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: easeInOut,
              delay: 3.4
            }
          }}
        >
        Ditra Amadia.
        </motion.h1>

        <div className='relative w-fit h-fit'>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 4.5
              }
            }}
          >
            <motion.div 
              className='absolute -z-10 -top-32 -left-32 w-72 h-72 rounded-full bg-gradient-radial from-purple_main to-transparent to-65% opacity-40'
              animate={{
                x: [0, 300],
                y: [0, -15, -30, -15, 0],
                transition: {
                  duration: 5,
                  ease: 'easeInOut',
                  delay: 4.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  repeatDelay: 0
                }
              }}
            />
            <motion.div 
              className='absolute -z-10 -bottom-32 -right-32 w-72 h-72 rounded-full bg-gradient-radial from-tosca_main to-transparent to-65% opacity-25'
              animate={{
                x: [0, -300],
                y: [0, 15, 30, 15, 0],
                transition: {
                  duration: 5,
                  ease: 'easeInOut',
                  delay: 4.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  repeatDelay: 0
                }
              }}
            />
          </motion.div>
          
          <motion.h2 
            className='w-fit abril-fatface-regular text-purple-to-blue text-5xl md:text-7xl'
            initial={{
              x: -50,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: easeInOut,
                delay: 3.5
              }
            }}
          >
            A Full Stack<br/>Web Developer
          </motion.h2>
        </div>

        <motion.p 
          className='poppins-medium text-white'
          initial={{
            x: -50,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: easeInOut,
              delay: 3.6
            }
          }}
        >
          with over 3 years of experience in <br/> developing responsive and user-friendly websites.
        </motion.p>
      </div>
      
    </div>
  );
};

export default HeroSection;