import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

//yarn run dev
//continue from 2:20:23

const Home: NextPage = () =>  {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ee5edf]/80'>
      <Head>
        <title>Portfolio by Julius</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png"/>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experiences */}
      <section id="experiences" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact-me" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;