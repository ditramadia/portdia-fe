import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  text: string
  icon: any
};

const Button = (props: ButtonProps) => {
  const { text, icon } = props;

  return (
    <div className='w-full h-fit py-2 flex gap-3 items-center justify-center bg-blue_main rounded-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue_dark active:bg-blue_darker'>
      <Image src={icon} alt='Download icon' />
      <span className='text-white poppins-medium'>{text}</span>
    </div>
  );
};

export default Button;