import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-[20px]'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill 
              key={0}
              imageSource={"./images/skill-logos/html.png"} 
              proficiency="90"
            />
            <Skill 
              key={1}
              imageSource={"./images/skill-logos/css.png"} 
              proficiency="85"
            />
            <Skill 
              key={2}
              imageSource={"./images/skill-logos/js.png"} 
              proficiency="70"
            />
            <Skill 
              key={3}
              imageSource={"./images/skill-logos/python.png"} 
              proficiency="70"
            />
            <Skill 
              key={4}
              imageSource={"./images/skill-logos/react.png"} 
              proficiency="70"
            />
            <Skill 
              key={5}
              imageSource={"./images/skill-logos/next.png"} 
              proficiency="70"
            />
            <Skill 
              key={6}
              imageSource={"./images/skill-logos/bootstrap.png"} 
              proficiency="90"
            />
            <Skill 
              key={7}
              imageSource={"./images/skill-logos/aws.png"} 
              proficiency="30"
            />
        </div>
    </motion.div>
  );
};

export default Skills;