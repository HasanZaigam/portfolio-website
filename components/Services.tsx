import { CodeBracketIcon, CodeBracketSquareIcon, ComputerDesktopIcon, PaintBrushIcon } from '@heroicons/react/20/solid'
import React from 'react' 
const Services = () => {
  return (
    <section id='services'>
      <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className="custom-heading">
            My <span  className='text-yellow-400'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem]
        text-white'>
            <div>
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase
                 font-semibold text-center p-[2rem]'>
                  <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] '>
                  Full-Stack Developer
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Expert in crafting end-to-end web solutions, from user interfaces to backend systems. 
                  I ensure seamless, scalable applications that deliver exceptional user experiences.y
                  </p>

                </div>
            </div>
            <div>
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase
                 font-semibold text-center p-[2rem]'>
                  <PaintBrushIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] '>
                  Web 3.O Learner
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  I focus on developing decentralized applications and leveraging blockchain technology.
                   My expertise in Web 3.0 ensures secure, transparent, and innovative solutions
                   that are shaping the future of the internet.
                  </p>

                </div>
            </div>
            <div>
                <div className='bg-blue-900 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase
                 font-semibold text-center p-[2rem]'>
                  <ComputerDesktopIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] '>
                  AI-Enhanced Web Solutions.
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  I blend advanced AI with Web 2.0 and Web 3.0 technologies to build smart, efficient 
                  applications that drive innovation and improve user experiences.
                  </p>

                </div>
            </div>

        </div>
    </div>
    </section>
  )
    
}

export default Services