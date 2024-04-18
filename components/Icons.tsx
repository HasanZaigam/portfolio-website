import Image from 'next/image';
import React from 'react';

const Icons = () => {
  return (
    <div className=' z-[1000000000] fixed top-1/2 left-0 transform -translate-y-1/2'>
      {/* Square box with rounded corners */}
      <div className='w-[50px] h-[200px] bg-[#1f2833] rounded-lg p-4'>
        <div className='flex flex-col items-center  space-y-6'>
          <a href="mailto:hasan.13519011722@ipu.ac.in" className='cursor-pointer' >
            <Image 
              src="/images/emailIcon.png"
              alt="Portfolio"
              width={50}
              height={50}
              className="object-contain hover:bg-blue-700"
            /> 
          </a>
          <a href="https://www.linkedin.com/in/hasan-zaigam-1914b124b/" className='cursor-pointer'>
            <Image 
              src="/images/linkedinIcon.png"
              alt="Portfolio"
              width={50}
              height={50}
              className="object-contain hover:bg-blue-700"
            /> 
          </a>
          <a href="https://github.com/HasanZaigam" className='cursor-pointer'>
            <Image
              src="/images/githubIcon.png"
              alt="Portfolio"
              width={50}
              height={50}
              className="object-contain hover:bg-blue-700"
            /> 
          </a>
          <a href="https://twitter.com/HasanZaigam" className='cursor-pointer' >
            <Image 
              src="/images/X_logo_2023_(white).png"
              alt="Portfolio"
              width={50}
              height={50}
              className="object-contain hover:bg-blue-700"
            /> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Icons;
