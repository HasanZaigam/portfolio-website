import React from 'react'
import Image from 'next/image';

const Project = () => {
  return (
    <section id='projects'>
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='custom-heading'>
        Proj<span className='text-yellow-300'>ects</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
               w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                    src ="/images\p1.jpg"
                    alt ="Portfolio"
                    layout="fill"
                    className="object-contain"
                /> 
            </div>

            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
               w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                    src ="/images\p2.jpg"
                    alt ="Portfolio"
                    layout="fill"
                    className="object-contain"
                /> 
            </div>

            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
               w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                    src ="/images\p3.jpg"
                    alt ="Portfolio"
                    layout="fill"
                    className="object-contain"
                /> 
            </div>

            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
               w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                    src ="/images\p4.jpg"
                    alt ="Portfolio"
                    layout="fill"
                    className="object-contain"
                /> 
            </div>

            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
               w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                    src ="/images\p5.jpg"
                    alt ="Portfolio"
                    layout="fill"
                    className="object-contain"
                /> 
            </div>

            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
               w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                    src ="/images\p2.jpg"
                    alt ="Portfolio"
                    layout="fill"
                    className="object-contain"
                /> 
            </div>
        </div>

        
    </div>
    </section>
  )
}

export default Project;