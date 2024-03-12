import Image from 'next/image';

// Asset
import PortdiaLogo from '@public/images/portdia-main-glow.png';

const HeroSection = (): JSX.Element => {
  return (
    <div className="w-full my-20 h-fit flex flex-col items-center">
      <div className="relative w-20 h-20">
        <Image src={PortdiaLogo} alt='Portdia logo' fill style={{objectFit: "contain"}}/>
      </div>

      <div className="w-11/12 flex flex-col gap-5 text-center">
        <h1 className='poppins-bold text-tosca_main'>Ditra Amadia.</h1>
        <div className='relative w-full h-fit'>
          <div className='absolute -top-32 -left-32 w-72 h-72 rounded-full bg-gradient-radial from-purple_main to-transparent to-65% opacity-40'></div>
          <div className='absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-gradient-radial from-tosca_main to-transparent to-65% opacity-30'></div>
          <h2 className='abril-fatface-regular text-purple-to-blue text-5xl'>
            A Full Stack Web Developer
          </h2>
        </div>
        <p className='poppins-medium text-white'>with over 3 years of experience in developing responsive and user-friendly websites.</p>
      </div>

      
    </div>
  );
};

export default HeroSection;