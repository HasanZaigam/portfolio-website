import { TypeAnimation } from 'react-type-animation';

const TestEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer',
        2000
      
      ]}
      speed={20}
      className='text-[2rem] md:text-[3rem] text-[#BBE1FA] font-bold uppercase'
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TestEffect;