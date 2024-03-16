import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-fit mb-5 flex flex-col gap-5 items-center'>
      <div className='flex gap-4'>
        <a 
          href='https://www.linkedin.com/in/ditra-amadia/' 
          target='_blank' 
          rel="noopener noreferrer" 
          className='cursor-pointer'
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.8225 3.49976H6.1775C5.84426 3.49513 5.51338 3.55619 5.20374 3.67945C4.8941 3.80272 4.61178 3.98577 4.3729 4.21815C4.13401 4.45054 3.94324 4.7277 3.81149 5.03382C3.67973 5.33994 3.60956 5.66902 3.605 6.00226V35.9973C3.60956 36.3305 3.67973 36.6596 3.81149 36.9657C3.94324 37.2718 4.13401 37.549 4.3729 37.7814C4.61178 38.0137 4.8941 38.1968 5.20374 38.3201C5.51338 38.4433 5.84426 38.5044 6.1775 38.4998H35.8225C36.1557 38.5044 36.4866 38.4433 36.7963 38.3201C37.1059 38.1968 37.3882 38.0137 37.6271 37.7814C37.866 37.549 38.0568 37.2718 38.1885 36.9657C38.3203 36.6596 38.3904 36.3305 38.395 35.9973V6.00226C38.3904 5.66902 38.3203 5.33994 38.1885 5.03382C38.0568 4.7277 37.866 4.45054 37.6271 4.21815C37.3882 3.98577 37.1059 3.80272 36.7963 3.67945C36.4866 3.55619 36.1557 3.49513 35.8225 3.49976ZM14.1575 32.7948H8.9075V17.0448H14.1575V32.7948ZM11.5325 14.8398C10.8085 14.8398 10.1141 14.5521 9.6021 14.0402C9.09012 13.5282 8.8025 12.8338 8.8025 12.1098C8.8025 11.3857 9.09012 10.6913 9.6021 10.1794C10.1141 9.66738 10.8085 9.37976 11.5325 9.37976C11.917 9.33615 12.3063 9.37425 12.675 9.49155C13.0438 9.60885 13.3835 9.80271 13.6721 10.0604C13.9608 10.3182 14.1917 10.6339 14.3498 10.9871C14.5079 11.3403 14.5896 11.7228 14.5896 12.1098C14.5896 12.4967 14.5079 12.8793 14.3498 13.2324C14.1917 13.5856 13.9608 13.9013 13.6721 14.1591C13.3835 14.4168 13.0438 14.6107 12.675 14.728C12.3063 14.8453 11.917 14.8834 11.5325 14.8398ZM33.0925 32.7948H27.8425V24.3423C27.8425 22.2248 27.09 20.8423 25.1825 20.8423C24.5922 20.8466 24.0173 21.0317 23.5355 21.3728C23.0536 21.7139 22.6878 22.1944 22.4875 22.7498C22.3506 23.1611 22.2912 23.5943 22.3125 24.0273V32.7773H17.0625V17.0273H22.3125V19.2498C22.7894 18.4222 23.4831 17.7404 24.3188 17.2779C25.1545 16.8153 26.1005 16.5895 27.055 16.6248C30.555 16.6248 33.0925 18.8823 33.0925 23.7298V32.7948Z" fill="#EEF1EC"/>
          </svg>
        </a>

        <a 
          href='https://github.com/ditramadia/' 
          target='_blank' 
          rel="noopener noreferrer" 
          className='rounded-full cursor-pointer'
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3.5C18.7019 3.5 16.4262 3.95265 14.303 4.83211C12.1798 5.71157 10.2507 7.00061 8.62563 8.62563C5.34374 11.9075 3.5 16.3587 3.5 21C3.5 28.735 8.5225 35.2975 15.47 37.625C16.345 37.765 16.625 37.2225 16.625 36.75V33.7925C11.7775 34.8425 10.745 31.4475 10.745 31.4475C9.94 29.4175 8.8025 28.875 8.8025 28.875C7.21 27.79 8.925 27.825 8.925 27.825C10.675 27.9475 11.6025 29.6275 11.6025 29.6275C13.125 32.2875 15.6975 31.5 16.695 31.08C16.8525 29.9425 17.3075 29.1725 17.7975 28.735C13.9125 28.2975 9.835 26.7925 9.835 20.125C9.835 18.1825 10.5 16.625 11.6375 15.3825C11.4625 14.945 10.85 13.125 11.8125 10.7625C11.8125 10.7625 13.2825 10.29 16.625 12.5475C18.0075 12.1625 19.5125 11.97 21 11.97C22.4875 11.97 23.9925 12.1625 25.375 12.5475C28.7175 10.29 30.1875 10.7625 30.1875 10.7625C31.15 13.125 30.5375 14.945 30.3625 15.3825C31.5 16.625 32.165 18.1825 32.165 20.125C32.165 26.81 28.07 28.28 24.1675 28.7175C24.7975 29.26 25.375 30.3275 25.375 31.955V36.75C25.375 37.2225 25.655 37.7825 26.5475 37.625C33.495 35.28 38.5 28.735 38.5 21C38.5 18.7019 38.0474 16.4262 37.1679 14.303C36.2884 12.1798 34.9994 10.2507 33.3744 8.62563C31.7493 7.00061 29.8202 5.71157 27.697 4.83211C25.5738 3.95265 23.2981 3.5 21 3.5Z" fill="#EEF1EC"/>
          </svg>
        </a>
      </div>

      <div className='text-white poppins-regular text-sm text-center'>
        &copy; 2024 All rights reserved. <span className='text-tosca_main'>Ditra Amadia</span>
      </div>
    </div>
  );
};

export default Footer;