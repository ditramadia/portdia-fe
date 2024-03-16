import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  text: string
  color: 'blue' | 'white'
  icon?: any
  iconAlt?: string
};

const Button = (props: ButtonProps) => {
  const { text, color, icon, iconAlt } = props;

  const colors = color === 'blue' ? 'text-white bg-blue_main hover:bg-blue_dark active:bg-blue_darker' : 'text-black bg-white hover:bg-white_dark active:bg-white_darker'

  return (
    <div className={`w-full h-fit py-2 flex gap-3 items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ease-in-out ${colors}`}>
      {
        icon && 
        iconAlt &&
        <Image src={icon} alt={iconAlt} />
      }
      <span className='poppins-medium'>{text}</span>
    </div>
  );
};

export default Button;