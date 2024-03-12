import React from 'react';

// Asset
import DownloadIcon from '@public/icons/download-ic.svg';

// Components
import Button from '../atom/Button';

const AboutSection = () => {
  return (
    <div className='w-11/12 pb-20 flex flex-col gap-7 md:gap-10 items-center'>

      <h2 className='w-fit abril-fatface-regular text-purple-to-blue text-5xl'>About Me</h2>

      <div className='w-full flex flex-col items-center gap-7 md:gap-8'>
        <div className='flex flex-col gap-1'>
          <p className='text-white poppins-thin text-center'>
            Hello, I'm Ditra, a full-stack developer currently studying computer science at ITB.
          </p>
          <p className='text-white poppins-thin text-center'>
            I love to express my skills and creativity through this website.
          </p>
          <p className='text-white poppins-thin text-center'> 
            Feel free to have a look and contact me about anything!
          </p>
        </div>

        <a target="_blank" href="https://drive.google.com/file/d/1CRswzCp9LZNwNbTxMcPSmIMR6LAXf0Ng/view?usp=sharing" rel="noopener noreferrer">
          <div className='relative w-[150px] group'>
            <Button text='Resume' icon={DownloadIcon}/>
            <div className='absolute -z-10 -top-[140px] -right-[120px] w-[300px] h-[300px] rounded-full bg-gradient-radial from-blue_main to-transparent to-65% opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20'></div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default AboutSection