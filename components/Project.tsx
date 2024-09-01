import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projectsData } from './PorjectsData'; // Adjust the import path if necessary

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState<'fullStack' | 'web3' | 'frontend' | 'all'>('all');
  const [showMore, setShowMore] = useState(false);

  // Reset showMore when the selectedCategory changes
  useEffect(() => {
    setShowMore(false);
  }, [selectedCategory]);

  const projectsToShow = showMore ? projectsData[selectedCategory] : projectsData[selectedCategory].slice(0, 3);

  return (
    <section id='projects'>
      <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='custom-heading mb-[2rem]'>
          Proj<span className='text-yellow-300'>ects</span>
        </h1>

        {/* Category Filters */}
        <div className='w-[80%] mx-auto mb-[4rem] flex justify-center gap-[1rem]'>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`py-2 px-4 rounded-md text-lg font-bold ${selectedCategory === 'all' ? 'bg-yellow-300 text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}
          >
            All Projects
          </button>
          <button
            onClick={() => setSelectedCategory('frontend')}
            className={`py-2 px-4 rounded-md text-lg font-bold ${selectedCategory === 'frontend' ? 'bg-yellow-300 text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}
          >
            Front-End
          </button>
          <button
            onClick={() => setSelectedCategory('fullStack')}
            className={`py-2 px-4 rounded-md text-lg font-bold ${selectedCategory === 'fullStack' ? 'bg-yellow-300 text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}
          >
            Full-Stack
          </button>
          <button
            onClick={() => setSelectedCategory('web3')}
            className={`py-2 px-4 rounded-md text-lg font-bold ${selectedCategory === 'web3' ? 'bg-yellow-300 text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}
          >
            Web 3.0
          </button>
        </div>

        {/* Projects Grid */}
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
          {projectsToShow.map(project => (
            <div
              key={project.id}
              className='relative group transform cursor-pointer hover:-translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]'
            >
              <Image
                src={project.src}
                alt={project.alt}
                layout="fill"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:blur-sm"
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4'>
                <h3 className='text-2xl font-bold text-yellow-400 mb-2'>{project.title}</h3>
                <p className='text-white text-center mb-4'>{project.description}</p>
                <div className='flex space-x-4'>
                  <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className='flex items-center bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-300'>
                    <span className='text-lg font-bold'>&lt;  /&gt;</span>
                    <span> Source</span>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='flex items-center bg-white text-black px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'>
                    <svg className='w-6 h-6 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z'></path></svg>
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {projectsData[selectedCategory].length > 3 && (
          <div className='w-[80%] mx-auto mt-4 flex justify-center'>
            <button
              onClick={() => setShowMore(prev => !prev)}
              className='py-2 px-6 rounded-md bg-yellow-300 text-black hover:bg-yellow-400 transition-colors duration-300'
            >
              {showMore ? 'Show Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
