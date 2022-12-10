import React, { useRef } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';

type Props = {};

function ContactMe({}: Props) {
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lfxvvvi', 'template_3lqyb3j', form.current, '0ZGzh-KQhKteDV5ap')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='h-screen flex relative flex-col text-centermd:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-[20px]'>Contact me</h3>
            
            <div className='flex flex-col space-y-10'>
                <h4 className='text-2xl font-semibold text-center'>Feel free to contact me!</h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#ee5edf] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>jcaliao098@gmail.com</p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input name="name" className='contactInput' type="text" placeholder='Name' />
                        <input name="email" className='contactInput' type="email" placeholder='Email' />
                    </div>
                    <input name="subject" className='contactInput' type="text" placeholder='Subject' />
                    <textarea name="message" className='contactInput scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ee5edf]/80' placeholder='Message'/>
                    <button type='submit' className='bg-[#ee5edf] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;