import React from 'react';

interface TextLinkProps {
  text: string,
  onClick?: () => {},
}

const TextLink = (props: TextLinkProps) => {
  const { text, onClick } = props;
  
  return (
    <span className='inline-block relative cursor-pointer group'>
      <span className='absolute -z-10 bottom-[1px] w-full h-[2px] bg-tosca_main transition-all duration-300 ease-in-out group-hover:h-[23px] group-hover:bg-purple_main' />
      <span className='text-white poppins-thin text-center'>
        {text}
      </span>
    </span>
  );
};

export default TextLink;