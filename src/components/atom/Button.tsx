import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  text: string
  icon?: any
  iconAlt?: string
};

const Button = (props: ButtonProps) => {
  const { text, icon, iconAlt } = props;


  return (
    <div className='w-full h-fit py-2 flex gap-3 items-center justify-center rounded-lg bg-blue_main cursor-pointer transition-colors duration-150 ease-in-out hover:bg-blue_dark active:bg-blue_darker active:scale-95'>
      {
        icon && 
        iconAlt &&
        <Image src={icon} alt={iconAlt} />
      }
      <span className='text-white poppins-medium'>{text}</span>
    </div>
  );
};

export default Button;