import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    imageSource: string;
    proficiency: string;
};

function Skill({ imageSource, proficiency }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img 
                initial={{ 
                    x: 200,
                    opacity: 0,
                }}
                whileInView={{ 
                    x:0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1
                }}
                src={imageSource}
                alt='' 
                className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100 '>{proficiency}%</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;