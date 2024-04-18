import React from 'react'
import Image from 'next/image';
const About = () => {
  return (
    <section id="about">
           <div className='bg-[#121121] pt-[8rem] pb-[4rem]'>
                <div>
                    <h1 className='custom-heading'>
                        ABOUT <span className='text-yellow-400'>ME</span>
                    </h1> 
                    <br/>   
                    <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>

                        <div className='mb-[3rem] flex flex-col md:flex-row items-center md:space-x-10'>
                            <div>
                            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                                Transforming <span className='text-[#3282B8]'>Visions</span>
                            </h2>
            
                            <div><span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                            <br/>
                            <p className='text-[19px] text-slate-300 w-[80%] md:w-[auto]'>
                            I am a second-year B.Tech student at GGSIPU and a skilled frontend developer 
                            with hands-on experience in React and Node.js. If you are looking to connect with me or
                             collaborate on projects, feel free to reach out. I am enthusiastic 
                            about web development and bring a strong foundation in both design and coding to the table.
                            </p> 
                            </div>
                            
                            </div>
                        </div>

                        <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                            <Image src='/images/DSC_0961.JPG' alt="useimage"
                                layout="fill" 
                                objectFit='contain' 
                                className='relative z-[11] w-[100%] h-[100%] object-contain' />
                            <div className='absolute w-[100%] h-[77%] z-[10] bg-[#4084e9] left-[2.7rem] top-[2rem]'></div>
                        </div>    
                    </div>      
                </div>
            </div>

    </section>
   );
}

export default About;