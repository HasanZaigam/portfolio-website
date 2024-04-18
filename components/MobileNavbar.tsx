import { PhoneXMarkIcon, XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({ nav, closeNav }: Props) => {
  const navanimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  const handleNavLinkClick = (sectionId: string) => {
    closeNav();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed ${navanimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#141c27]`}>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className='nav-link-mobile' onClick={() => handleNavLinkClick('index')}>
          HOME
        </div>
        <div className='nav-link-mobile' onClick={() => handleNavLinkClick('about')}>
          ABOUT
        </div>
        <div className='nav-link-mobile' onClick={() => handleNavLinkClick('services')}>
          SERVICES
        </div>
        <div className='nav-link-mobile' onClick={() => handleNavLinkClick('skills')}>
          SKILLS
        </div>
        <div className='nav-link-mobile' onClick={() => handleNavLinkClick('projects')}>
          PROJECT
        </div>
        <div className='nav-link-mobile' onClick={() => handleNavLinkClick('contact')}>
          CONTACT
        </div>
        <div onClick={closeNav} className="top-[2rem] right-[2rem] w-[3rem] md:hidden h-[3rem] absolute z-[10000000] cursor-pointer text-blue-800">
          <XMarkIcon />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
