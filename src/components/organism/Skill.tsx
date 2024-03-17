import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Component
import SkillCard from '../molecule/SkillCard';
import { fadeIn } from '@/animations/fade';

const Skill = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  });


  return loading ? (
    <div></div>
  ) : (
    <div className='w-11/12 md:w-fit mb-52 flex flex-col items-center gap-7 md:flex-row md:gap-12 md:mb-96'>
      <motion.div
        custom={3}
        variants={fadeIn}
        initial="enter"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SkillCard experience={5} title='UI/UX Designer' description='Designing a user intuitive and aesthetically pleasing interface' />
      </motion.div>
      <motion.div
        custom={1}
        variants={fadeIn}
        initial="enter"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SkillCard experience={3} title='Web Dev' description='Developing and maintaining website to meet user requirement' />
      </motion.div>
      <motion.div
        custom={5}
        variants={fadeIn}
        initial="enter"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SkillCard experience={2} title='Project Mgmt' description='Realizing projects within the set requirements and budget' />
      </motion.div>
    </div>
  );
};

export default Skill;