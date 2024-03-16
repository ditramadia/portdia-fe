import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
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
    <div className='relative w-full h-fit flex flex-col gap-5 items-center'>
      <div className='flex gap-4'>
        <a 
          href='https://www.linkedin.com/in/ditra-amadia/' 
          target='_blank' 
          rel="noopener noreferrer" 
          className='cursor-pointer'
        >
          <button className="bg-white transform hover:-translate-y-3 w-10 h-10 rounded-full duration-500 text-black hover:bg-blue-500 hover:text-white text-2xl">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </button>
        </a>

        <a 
          href='https://github.com/ditramadia/' 
          target='_blank' 
          rel="noopener noreferrer" 
          className='rounded-full cursor-pointer'
        >
          <button className="bg-white transform hover:-translate-y-3 w-10 h-10 rounded-full duration-500 text-black hover:bg-[#212c3e] hover:text-white text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
      </div>

      <div className='text-white poppins-regular text-sm text-center mb-5'>
        &copy; 2024 All rights reserved. <span className='text-tosca_main'>Ditra Amadia</span>
      </div>

    </div>
  );
};

export default Footer;