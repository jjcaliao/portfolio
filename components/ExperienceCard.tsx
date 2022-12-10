import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    CompanyLogo: string;
    JobRole: string;
    CompanyName: string;
    Technologies: string[];
    StartDate: string;
    EndDate: string;
    SummaryPoints: string[];
}

export default function ExperienceCard({ CompanyLogo, JobRole, CompanyName, Technologies, StartDate, EndDate, SummaryPoints }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] snap-center p-7 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{
                once: true,
            }}
            className='h-24 w-24 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
            src={CompanyLogo} alt='' 
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>{JobRole}</h4>
            <p className='font-bold text-xl mt-1'>{CompanyName}</p>
            <div className='flex space-x-2 my-2'>
                {Technologies.map((technology, i) => (
                    <img className='h-8 w-8 rounded-[10px] object-cover' key={i} src={technology} alt='' />
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300 '>{StartDate} - {EndDate}</p>
            <ul className='list-disc space-y-2 ml-5 text-sm h-[110px] overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ee5edf]/80'>
                {SummaryPoints.map((summarypoint, i) => (
                    <li key={i}>{summarypoint}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}