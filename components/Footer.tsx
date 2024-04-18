import Image from 'next/image';
import React from 'react';
import ContactForm from './Contact';

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem]  bg-[#02050a]'>
      <h1 className='custom-heading'>
        Contact <span className='text-yellow-300'>ME</span>
        </h1>
        <ContactForm/>
      <div className='w-[80%] mx-auto mt-[1rem] flex items-center justify-between'>
        <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-50'>
          HasanZaigam 2023 | All Rights Reserved
        </div>
        <div className='flex items-center space-x-6'>
          <a href="mailto:hasan.13519011722@ipu.ac.in" className='transform cursor-pointer hover:-translate-y-3 transition-all duration-200 relative w-[25px] h-[25px] rounded-full md:h-[50px]'>
            <Image 
              src="/images/emailIcon.png"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            /> 
          </a>
          <a href="https://www.linkedin.com/in/hasan-zaigam-1914b124b/" className='transform cursor-pointer hover:-translate-y-3 transition-all duration-200 relative w-[25px] h-[25px] rounded-full md:h-[50px]'>
            <Image 
              src="/images/linkedinIcon.png"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            /> 
          </a>
          <a href="https://github.com/HasanZaigam" className='transform cursor-pointer hover:-translate-y-3 transition-all duration-200 relative w-[25px] h-[25px] rounded-full md:h-[50px]'>
            <Image
              src="/images/githubIcon.png"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            /> 
          </a>
          <a href="https://twitter.com/HasanZaigam" className='transform cursor-pointer hover:-translate-y-3 transition-all duration-200 relative w-[25px] h-[25px] rounded-full md:h-[50px]'>
            <Image 
              src="/images/X_logo_2023_(white).png"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            /> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
