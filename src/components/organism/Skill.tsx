import React from 'react';
import SkillCard from '../molecule/SkillCard';

const Skill = () => {
  return (
    <div>
      <SkillCard experience={5} title='UI/UX Designer' description='Designing a user intuitive and aesthetically pleasing interface' />
    </div>
  );
};

export default Skill;