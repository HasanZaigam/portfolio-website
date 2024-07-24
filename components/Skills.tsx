// import React from 'react';
// import SkillsItem from './SkillsItem';
// import SkillsLanguage from './SkillsLanguage';

// const Skills = () => {
//   return (
//     <section id='skills'>
//       <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-black'>
//         <h1 className='custom-heading'> Experience & <span className='text-yellow-400'>Skills</span></h1>
//         <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] item-center'>
//           <div>
//             <SkillsItem
//               title="Data Analyst Intern at IBM(SkillBuild CSRBOX)"
//               year="24 Jun - 5 Aug 2024"
//               description="During a 6-week virtual internship at IBM Skill Build (CSRBOX) as a Data Analyst, I had the opportunity to work on real-world projects and collaborate with IBM's data analyst experts. This experience allowed me to enhance my skills, network with industry professionals, and gain valuable insights. My performance in this role demonstrated my abilities and dedication, positioning me as a strong candidate for a pre-placement offer (PPO)."
//             />
//             <SkillsItem
//               title="Open-Source Contributions"
//               year="Jun 2023 - Present"
//               description="Contributed to several open-source projects, including bug fixes, feature implementations, and documentation improvements. Collaborated with project maintainers and community members to enhance the functionality and usability of various projects."
//             />
//             <SkillsItem
//               title="Google GirlScript Summer of Code"
//               year="2022-23"
//               description="Participated in the Google GirlScript Summer of Code program, where I worked on projects aimed at solving real-world problems. Gained hands-on experience in software development, project management, and teamwork."
//             />
//             <SkillsItem
//               title="Volunteer in RHA"
//               year="2023-Present"
//               description="Volunteered with the Robin Hood Army (RHA), a volunteer-based organization that works to get surplus food from restaurants and communities to serve the less fortunate. Engaged in various community service activities and helped in organizing food drives."
//             />
//           </div>
//           <div>
//             <SkillsLanguage
//               skills1="HTML"
//               skills2="CSS"
//               skills3="JavaScript"
//               level1="w-[93%]"
//               level2="w-[83%]"
//               level3="w-[50%]"
//             />
//             <SkillsLanguage
//               skills1="Node.js"
//               skills2="Express"
//               skills3="React"
//               level1="w-[20%]"
//               level2="w-[34%]"
//               level3="w-[50%]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsMeter from './SkillsMeter';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-black'>
        <h1 className='custom-heading'> Experience & <span className='text-yellow-400'>Skills</span></h1>
        
        {/* Experience Section */}
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
          <SkillsItem
            title="Data Analyst Intern at IBM(SkillBuild CSRBOX)"
            year="24 Jun - 5 Aug 2024"
            description="During a 6-week virtual internship at IBM Skill Build (CSRBOX) as a Data Analyst, I had the opportunity to work on real-world projects and collaborate with IBM's data analyst experts. This experience allowed me to enhance my skills, network with industry professionals, and gain valuable insights. My performance in this role demonstrated my abilities and dedication, positioning me as a strong candidate for a pre-placement offer (PPO)."
          />
          <SkillsItem
            title="Open-Source Contributions"
            year="Jun 2023 - Present"
            description="Contributed to several open-source projects, including bug fixes, feature implementations, and documentation improvements. Collaborated with project maintainers and community members to enhance the functionality and usability of various projects."
          />
          <SkillsItem
            title="Google GirlScript Summer of Code"
            year="2022-23"
            description="Participated in the Google GirlScript Summer of Code program, where I worked on projects aimed at solving real-world problems. Gained hands-on experience in software development, project management, and teamwork."
          />
          <SkillsItem
            title="Volunteer in RHA"
            year="2023-Present"
            description="Volunteered with the Robin Hood Army (RHA), a volunteer-based organization that works to get surplus food from restaurants and communities to serve the less fortunate. Engaged in various community service activities and helped in organizing food drives."
          />
        </div>

        {/* Skills Section */}
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem]'>
          {/* Frontend Technologies */}
          <h2 className='text-[24px] md:text-[30px] font-semibold text-white mb-[2rem]'>Frontend Technologies</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem] items-center'>
            <SkillsMeter skill="HTML" level={93} logo="/logos/others/html.svg" />
            <SkillsMeter skill="CSS" level={83} logo="/logos/others/css.svg" />
            <SkillsMeter skill="JavaScript" level={65} logo="/logos/programming languages/javascript.svg" />
            <SkillsMeter skill="Tailwind CSS" level={70} logo="/logos/others/tailwind.png" />
          </div>

          {/* Backend Technologies */}
          <h2 className='text-[24px] md:text-[30px] font-semibold text-white mt-[4rem] mb-[2rem]'>Backend Technologies</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem] items-center'>
            <SkillsMeter skill="Node.js" level={70} logo="/logos/frameworks/nodejs.svg" />
            <SkillsMeter skill="Express" level={35} logo="/logos/databases/expressjs-icon.svg" />
            <SkillsMeter skill="MongDB" level={30} logo="/logos/databases/mongodb.svg" />
          </div>

          {/* Frameworks */}
          <h2 className='text-[24px] md:text-[30px] font-semibold text-white mt-[4rem] mb-[2rem]'>Frameworks</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem] items-center'>
            <SkillsMeter skill="Bootstrap" level={63} logo="/logos/frameworks/boostrap.svg" />
            <SkillsMeter skill="React" level={60} logo="/logos/frameworks/react.svg" />
            <SkillsMeter skill="Redux" level={30} logo="/logos/frameworks/redux.svg" />
            <SkillsMeter skill="Next" level={35} logo="/logos/frameworks/next-js.svg" />
          </div>
          {/* Other Languages */}
          <h2 className='text-[24px] md:text-[30px] font-semibold text-white mt-[4rem] mb-[2rem]'>Others</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem] items-center'>
            <SkillsMeter skill="Java" level={70} logo="/logos/programming languages/java.svg" />
            <SkillsMeter skill="Python" level={50} logo="/logos/programming languages/python.svg" />
            <SkillsMeter skill="Git" level={75} logo="/logos/social icons/git.svg" /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
