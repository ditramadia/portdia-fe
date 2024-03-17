import React, { MouseEvent, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface SkillCardProps {
  experience: number,
  title: string,
  description: string
};

const SkillCard = (props: SkillCardProps) => {
  const { experience, title, description } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);
  const springY = useSpring(y);

  const transform = useMotionTemplate`rotateX(${springX}deg) rotateY(${springY}deg)`;

  const ROTATION_RANGE = 20;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const rotateXCoor = (e.clientX - rect.left) * ROTATION_RANGE;
    const rotateYCoor = (e.clientY - rect.top) * ROTATION_RANGE;
    
    const glareXCoor = e.clientX - rect.left;
    const glareYCoor = e.clientY - rect.top;

    ref.current.style.setProperty("--mouse-x", `${glareXCoor}px`);
    ref.current.style.setProperty("--mouse-y", `${glareYCoor}px`);

    const rX = (rotateYCoor / height - HALF_ROTATION_RANGE) * -1;
    const rY = (rotateXCoor / width - HALF_ROTATION_RANGE);

    x.set(rX);
    y.set(rY);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      ref={ref}
      className='relative w-[340px] h-[180px] p-[1px] flex justify-center items-center bg-white/10 backdrop-blur-lg rounded-lg glare'
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative z-10 w-full h-full p-6 bg-black/80 rounded-lg flex flex-col justify-center items-center text-center gap-4'>
        <h6 
          className='text-tosca_main poppins-bold text-xs'
        >{experience} YEARS EXPERIENCE</h6>
        <h3 
          className='text-white abril-fatface-regular text-3xl'
        >{title}</h3>
        <p 
          className='text-grey poppins-regular text-md'
        >{description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;