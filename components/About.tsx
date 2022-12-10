import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-[20px]'>About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 1.2,
            }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[180px] xl:w-[300px] xl:h-[400px]" 
            src="/images/profile_photo.JPEG" 
            alt="" 
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>A little background information...</h4>
            <p className='text-sm'>Hi, I am Julius and I am a web developer. I studied Creative Computing at Queen Mary University of London and graduated in the year 2022. I started coding since year 9, and the first programming language I learned was Python. From a young age, I wanted to become a games developer and create my own games, hence why I got into coding. As hobbies, I love to play music, code, work out and cook.</p>
        </div>
    </motion.div>
  )
}