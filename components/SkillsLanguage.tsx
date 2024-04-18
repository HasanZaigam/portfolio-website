import React from "react";

interface Props {
    skills1 :string;
    skills2 :string;
    skills3 :string;
    level1 :string;
    level2 :string; 
    level3 :string;

}
const SkillsLanguage = ({ level1,level2,level3,skills1,skills2 ,skills3 }: Props) => {
    return (
    <div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] upercase bg-gray-800 rounded-sm text-white text-20px font-bold">
            {skills1}
        </h1>
        <span 
            className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}>
        </span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] upercase bg-gray-800 rounded-sm text-white text-20px font-bold">
            {skills2}
        </h1>
        <span 
            className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}>
        </span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] upercase bg-gray-800 rounded-sm text-white text-20px font-bold">
            {skills3}
        </h1>
        <span 
            className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}>
        </span>
      </div>
    </div>
      
    );
  };
  export default SkillsLanguage;