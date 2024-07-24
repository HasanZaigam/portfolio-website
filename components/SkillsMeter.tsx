import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

interface Props {
  skill: string;
  level: number;
  logo: string; // SVG logo path
}

const SkillsMeter = ({ skill, level, logo }: Props) => {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative w-[150px] h-[150px]'>
        <CircularProgressbar
          value={level}
          styles={buildStyles({
            pathColor: '#55e6a5',
            trailColor: '#2b2b2b',
            textSize: '16px',
            pathTransitionDuration: 1, // Animation duration
          })}
        />
        {/* Centered content inside the meter */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Background for logo */}
          <div className="flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full">
            <Image
              src={logo}
              alt={`${skill} logo`}
              width={50} // Adjusted width for logo inside the background
              height={50} // Adjusted height for logo inside the background
              className="object-contain"
            />
          </div>
          <span className="text-white text-center text-[14px] font-semibold mt-2">{skill}</span>
        </div>
      </div>
      <p className='mt-2 text-white font-semibold'>{level}%</p>
    </div>
  );
};

export default SkillsMeter;
