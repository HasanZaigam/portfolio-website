import { CodeBracketIcon, CodeBracketSquareIcon, ComputerDesktopIcon, PaintBrushIcon } from '@heroicons/react/20/solid'
import React from 'react' 
const Services = () => {
  return (
    <section id='services'>
      <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
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
                    Front-end Developer
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  I am a frontend developer specializing in constructing responsive
                   and optimized websites,
                   ensuring seamless user experiences and efficient performance.
                  </p>

                </div>
            </div>
            <div>
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase
                 font-semibold text-center p-[2rem]'>
                  <PaintBrushIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] '>
                    UI/UX <br/>Designer 
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  I have crafted various landing pages and developed extensive design systems.
                   Through my proficiency, I ensure visually engaging interfaces,
                    fostering an enriched user experience.
                  </p>

                </div>
            </div>
            <div>
                <div className='bg-blue-900 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase
                 font-semibold text-center p-[2rem]'>
                  <ComputerDesktopIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                  <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] '>
                    Machine Learning
                  </h1>
                  <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  I have experience working with various Python libraries and 
                  have trained numerous machine learning models, including those for detecting 
                  malicious links and identifying fake news.
                  </p>

                </div>
            </div>

        </div>
    </div>
    </section>
  )
    
}

export default Services