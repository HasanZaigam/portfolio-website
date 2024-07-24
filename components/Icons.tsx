// import Image from 'next/image';
// import React from 'react';

// const Icons = () => {
//   return (
//     <div className='z-[1000000000] fixed top-1/2 left-0 transform -translate-y-1/2'>
//       {/* Container for icons */}
//       <div className='w-[54px] h-[230px] border-2 border-cyan-400 bg-blue-800 rounded-lg p-2 flex flex-col items-center justify-between'>
//         {/* Individual icon container */}
//         <a href="mailto:hasan.13519011722@ipu.ac.in" className='block'>
//           <div className='relative w-[40px] h-[40px] flex items-center justify-center border-2 border-teal-500 bg-black rounded-full transition-colors duration-300 hover:bg-green-600'>
//             <Image 
//               src="/images/emailIcon.png"
//               alt="Email"
//               width={20}
//               height={20}
//               className="object-contain"
//             /> 
//           </div>
//         </a>
//         <a href="https://www.linkedin.com/in/hasan-zaigam-1914b124b/" className='block'>
//           <div className='relative w-[40px] h-[40px] flex items-center justify-center border-2 border-teal-500 bg-black rounded-full transition-colors duration-200 hover:bg-green-600'>
//             <Image 
//               src="/images/linkedinIcon.png"
//               alt="LinkedIn"
//               width={20}
//               height={20}
//               className="object-contain"
//             /> 
//           </div>
//         </a>
//         <a href="https://github.com/HasanZaigam" className='block'>
//           <div className='relative w-[40px] h-[40px] flex items-center justify-center border-2 border-teal-500 bg-black rounded-full transition-colors duration-200 hover:bg-green-600'>
//             <Image
//               src="/images/githubIcon.png"
//               alt="GitHub"
//               width={20}
//               height={20}
//               className="object-contain"
//             /> 
//           </div>
//         </a>
//         <a href="https://twitter.com/HasanZaigam" className='block'>
//           <div className='relative w-[40px] h-[40px] flex items-center justify-center border-2 border-teal-500 bg-black rounded-full transition-colors duration-200 hover:bg-green-600'>
//             <Image 
//               src="/images/X_logo_2023_(white).png"
//               alt="Twitter"
//               width={20}
//               height={20}
//               className="object-contain"
//             /> 
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Icons;


import Image from 'next/image';
import React from 'react';

const Icons = () => {
  return (
    <div className='z-[1000000000] fixed top-1/2 left-0 transform -translate-y-1/2'>
      {/* Container for icons */}
      <div className='icons-container'>
        {/* Individual icon container */}
        <a href="mailto:hasan.13519011722@ipu.ac.in" className='block'>
          <div className='icon'>
            <Image 
              src="/images/emailIcon.png"
              alt="Email"
              width={20}
              height={20}
              className="object-contain"
            /> 
          </div>
        </a>
        <a href="https://www.linkedin.com/in/hasan-zaigam-1914b124b/" className='block'>
          <div className='icon'>
            <Image 
              src="/images/linkedinIcon.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="object-contain"
            /> 
          </div>
        </a>
        <a href="https://github.com/HasanZaigam" className='block'>
          <div className='icon'>
            <Image
              src="/images/githubIcon.png"
              alt="GitHub"
              width={20}
              height={20}
              className="object-contain"
            /> 
          </div>
        </a>
        <a href="https://twitter.com/HasanZaigam" className='block'>
          <div className='icon'>
            <Image 
              src="/images/X_logo_2023_(white).png"
              alt="Twitter"
              width={20}
              height={20}
              className="object-contain"
            /> 
          </div>
        </a>
      </div>

      <style jsx>{`
        .icons-container {
          width: 60px;
          height: 250px;
          border-radius: 0.75rem;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(10px); /* Blurry background effect */
          background: rgba(255, 255, 255, 0.2); /* Light, semi-transparent background */
          border: 2px solid rgba(255, 255, 255, 0.5); /* Subtle white border */
        }
        .icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4); /* Slightly darkened background for the icon container */
          transition: background 0.3s, transform 0.3s;
        }
        .icon:hover {
          background: rgba(0, 255, 0, 0.6); /* Green background on hover */
          transform: scale(1.1); /* Slightly enlarge on hover */
        }
      `}</style>
    </div>
  );
};

export default Icons;
