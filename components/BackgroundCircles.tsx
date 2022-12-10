import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
            scale: 0.01,
        }}
        animate={{
            scale: [1, 2, 2.5, 2.75, 1],
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='relative flex justify-center items-center'
    >
        <div className='absolute border border-[#666666] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[#ee5edf] rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles