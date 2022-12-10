import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-[20px]'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ee5edf]/80'>
          {/* 1st project */}
          <div key={0} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{ 
                y: -300,
                opacity: 0, 
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration:1.2 }}
              viewport={{ once: true }}
              className='w-[100%] h-auto max-w-[500px] md:-[80%] md:max-w-[500px] object-cover' src="/images/project-photos/hulu-clone.png" alt="" 
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <Link href="https://hulu-clone-repo-eta.vercel.app/"><h4 className='text-2xl font-semibold text-center'>1. Hulu clone</h4></Link>
              <p className='text-sm text-center lg:text-lg'>
                Hulu clone built using react native. API from tmbd to fetch movie info.
              </p>
            </div>
          </div>

          {/* 2nd project */}

          <div key={1} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{ 
                y: -300,
                opacity: 0, 
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration:1.2 }}
              viewport={{ once: true }}
              className='w-[100%] h-auto max-w-[500px] md:-[80%] md:max-w-[500px] object-cover' src="/images/project-photos/ig-clone.png" alt="" 
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <Link href="https://instagram-clone-repo.vercel.app/"><h4 className='text-2xl font-semibold text-center'>2. Instagram clone</h4></Link>
              <p className='text-sm text-center lg:text-lg'>
              Working Instagram clone with log-in and log-out authentication using google. Just like Instagram, you can create posts, like and comment in other posts. Firebase is used to store posts, comments, like counts and accounts. React.js and tailwind.css is used to create this amazing UI.
              </p>
            </div>
          </div>

          {/* 3rd project */}

          <div key={2} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{ 
                y: -300,
                opacity: 0, 
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration:1.2 }}
              viewport={{ once: true }}
              className='w-[100%] h-auto max-w-[500px] md:-[80%] md:max-w-[500px] object-cover' src="/images/project-photos/calculator.png" alt="" 
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <Link href="https://jjcaliao.github.io/week-4/"><h4 className='text-2xl font-semibold text-center'>3. Calculator</h4></Link>
              <p className='text-sm text-center lg:text-lg'>
                Functional calculator built using the basics of JavaScript, HTML and CSS.
              </p>
            </div>
          </div>

          {/* 4th project */}

          <div key={3} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{ 
                y: -300,
                opacity: 0, 
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration:1.2 }}
              viewport={{ once: true }}
              className='w-[100%] h-auto max-w-[500px] md:-[80%] md:max-w-[500px] object-cover' src="/images/project-photos/rock-paper-scissors.png" alt="" 
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <Link href="https://jjcaliao.github.io/week-4-rock-paper-scissors/"><h4 className='text-2xl font-semibold text-center'>4. Rock paper scissors game</h4></Link>
              <p className='text-sm text-center lg:text-lg'>
                A functional rock paper scissors game built using JavaScript, CSS and HTML. 
              </p>
            </div>
          </div>
        </div>

        <div className='w-full absolute top-[30%] bg-[#ee5edf]/10 left-0 h-[400px] -skew-y-12'>
        </div>
    </motion.div>
  );
};

export default Projects;