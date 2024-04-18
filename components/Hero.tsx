
import React from 'react';
 import Particles from "react-tsparticles";
import TextEffect from './TestEffect';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='hero'>
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center relative">
        <Particles />
        <div className='w-[80%] grid-col-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center relative'>
          <div className="relative z-10">
            <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
              Hi👋, I'M <span className='text-blue-800'>HASAN!</span>
            </h1>
            <TextEffect />
            <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>
              If you are looking to connect with me or collaborate on projects, feel free to reach out.
              I am enthusiastic about web development and bring a strong foundation in both design and coding to the table.
            </p>
            <div className='mt-[2rem] flex-cols space-y-4 sm:space-y-1 sm:flex sm:flex-row items-center sm:space-x-12'>
              <button
                className='px-[1rem] hover:bg-[#3282B8] transition-all duration-200 py-[1rem] text-[18px] font-bold
                           uppercase bg-[#BBE1FA] text-black items-center space-x-2 rounded-[100px]'
              >
                <a href='#contact'>Hire ME</a>
              </button>
              <a
                href="/my-project/public/Resume.pdf" // Corrected path to your resume PDF
                download="HasanZaigam_Resume.pdf" // Specify the filename for download
                className='px-[1rem] hover:bg-[#3282B8] transition-all duration-200 py-[1rem] text-[18px] font-bold
                           uppercase bg-[#BBE1FA] text-black items-center space-x-2 rounded-[100px]'
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Display the circular image on small screens */}
          <div className='w-[200px] h-[200px] mt-[18vh] sm:mx-auto sm:mb-4 absolute top-[-150px] left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden sm:hidden'>
            <Image src="/images/hassan.jpg" layout="fill" className="object-cover rounded-full" alt={'Hero'} />
          </div>
          {/* Display the circular image on large screens */}
          <div className='hidden sm:block w-[400px] h-[400px] relative lg:flex items-center rounded-full '>
            <Image src="/images/hassan.jpg" layout="fill" className="object-cover rounded-full" alt={'Hero'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
