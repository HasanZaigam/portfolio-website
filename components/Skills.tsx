import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from'./SkillsLanguage'
const Skills = () => {
  return (
   <section id='skills'>
     <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='custom-heading'> Experience &  <span className='text-yellow-400'>Skills</span> 
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
        item-center'>
            <div>
            <SkillsItem  title="GirlsScrpit of Summer" year="2022-23" />
            <SkillsItem  title="Front-End Developer" year="2023" />
            <SkillsItem  title="Volunteer in RHA " year="2023" />
    
            </div>

            <div>
            <SkillsLanguage 
              skills1="html"
              skills2="CSS"
              skills3="JavaScript"
              level1="w-[93%]"
              level2="w-[83%]"
              level3="w-[50%]"
            />
            <SkillsLanguage 
              skills1="Node.js"
              skills2="Express"
              skills3="React"
              level1="w-[20%]"
              level2="w-[34%]"
              level3="w-[50%]"
            />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Skills