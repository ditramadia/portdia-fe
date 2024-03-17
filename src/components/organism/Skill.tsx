import React from 'react';
import SkillCard from '../molecule/SkillCard';

const Skill = () => {
  return (
    <div className='w-11/12 md:w-fit mb-52 flex flex-col items-center gap-7 md:flex-row md:gap-12 md:mb-96'>
      <SkillCard experience={5} title='UI/UX Designer' description='Designing a user intuitive and aesthetically pleasing interface' />
      <SkillCard experience={3} title='Web Dev' description='Developing and maintaining website to meet user requirement' />
      <SkillCard experience={2} title='Project Mgmt' description='Realizing projects within the set requirements and budget' />
    </div>
  );
};

export default Skill;