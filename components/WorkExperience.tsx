import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-[20px]'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-16 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ee5edf]/80 '>
            <ExperienceCard 
              key={0}
              CompanyLogo={"./images/company-photos/opportunitym.png"}
              JobRole="Fullstack web developer"
              CompanyName="OpportunityM"
              Technologies={[
                './images/skill-logos/html.png', 
                './images/skill-logos/css.png', 
                './images/skill-logos/js.png', 
                './images/skill-logos/python.png', 
                './images/skill-logos/bootstrap.png', 
                './images/skill-logos/aws.png'
              ]}
              StartDate="September 2022"
              EndDate="Present"
              SummaryPoints={[
                "Develop UI and components of the Web page using Bootstrap, HTML, CSS and Javascript.",
                "Test application and assist team in debugging.",
                "Built database models and functions using Django.",
                "Use AWS to deploy web pages and cloud storage.",
                "Keeps track on tasks and ensures updates are completed and features are tested."
              ]}
            />
            <ExperienceCard 
              key={1}
              CompanyLogo={"./images/company-photos/brainnest.png"}
              JobRole="Frontend developer"
              CompanyName="Brainnest"
              Technologies={[
                './images/skill-logos/html.png', 
                './images/skill-logos/css.png', 
                './images/skill-logos/js.png'
              ]}
              StartDate="June 2022"
              EndDate="July 2022"
              SummaryPoints={[
                "Demonstrated HTML, CSS and Javascript by building 4 different front end projects.",
                "Use github to deploy projects and showcase projects to senior frontend developer.",
                "Use feedback from frontend developer to improve projects.",
              ]}
            />
            <ExperienceCard 
              key={2}
              CompanyLogo={"./images/company-photos/filisoc.png"}
              JobRole="President of QMUL Filipino Society"
              CompanyName="QMSU Filipino Society"
              Technologies={[]}
              StartDate="August 2021"
              EndDate="July 2022"
              SummaryPoints={[
                "Lead of the QM Filipino Society student union group.",
                "Ensures the society runs smoothly and complies to the Students Union Articles of Association, by-laws and policies and procedures.",
                "Helped organise and host a collaborative valentines ball event with KCL, KUL, BUL, SGUL and Herts Filipino societies acommodating 330 guests. Awarded as best Filipino society event of the year by FiliFest.",
                "point of contact between SU group and SU staff.",
              ]}
            />
            {/* <ExperienceCard />
            <ExperienceCard /> */}
        </div>
    </motion.div>
  )
}

export default WorkExperience