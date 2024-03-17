import React from 'react';

interface SkillCardProps {
  experience: number,
  title: string,
  description: string
};

const SkillCard = (props: SkillCardProps) => {
  const { experience, title, description } = props;
  
  return (
    <div className='w-[340px] h-[180px] p-6 flex flex-col justify-center items-center gap-4 bg-white/20 backdrop-blur-lg border-[1px] border-solid border-white rounded-lg text-center'>
      <h6 className='text-tosca_main poppins-bold text-xs'>{experience} YEARS EXPERIENCE</h6>
      <h3 className='text-white abril-fatface-regular text-3xl'>{title}</h3>
      <p className='text-grey poppins-regular text-md'>{description}</p>
    </div>
  );
};

export default SkillCard;