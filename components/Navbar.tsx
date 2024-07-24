// import { Bars3Icon } from '@heroicons/react/20/solid';
// import React, { useState, useEffect } from 'react';

// interface Props {
//   openNav: () => void;
// }

// const Navbar = ({ openNav }: Props) => {
//   const [activeSection, setActiveSection] = useState('home');

//   const handleScroll = () => {
//     const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
//     const scrollPos = window.scrollY + window.innerHeight / 2;

//     for (const section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const { offsetTop, offsetHeight } = element;
//         if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     }
//   };

//   const handleClick = (event: React.MouseEvent<HTMLDivElement>, section: string) => {
//     event.preventDefault();
//     setActiveSection(section);
//     document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section id='home'>
//       <div className="border-b-2 w-[100%] fixed z-[10000] top-0 h-[13vh] bg-black shadow-md">
//         <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
//           <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
//             HASAN
//             <span className='text-blue-700'>ZAIGAM</span>
//           </h1>
//           <div className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'home')}><a href='#home'>HOME</a></div>
//           <div className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'about')}><a href='#about'>ABOUT</a></div>
//           <div className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'services')}><a href='#services'>SERVICES</a></div>
//           <div className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'skills')}><a href='#skills'>SKILLS</a></div>
//           <div className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'projects')}><a href='#projects'>PROJECTS</a></div>
//           <div className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'contact')}><a href='#contact'>CONTACT</a></div>

//           <div onClick={openNav}>
//             <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-800" />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .nav-link {
//           position: relative;
//           padding-bottom: 10px;
//           cursor: pointer;
//           color: white;
//         }

//         // .nav-link.active {
          
//         //   color: black;
//         // }

//         .nav-link.active::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 12px;
//           height: 12px;
//           background-color: tealblue;
//           border-radius: 50%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Navbar;


import { Bars3Icon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll handler to update active section
  const handleScroll = () => {
    const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
    const scrollPos = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Click handler to scroll to section and set active section
  const handleClick = (event: React.MouseEvent<HTMLDivElement>, section: string) => {
    event.preventDefault();
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='home'>
      <div className="border-b-2 w-[100%] fixed z-[10000] top-0 h-[13vh] bg-black shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
            HASAN
            <span className='text-blue-700'>ZAIGAM</span>
          </h1>
          <div
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'home')}
          >
            <a href='#home'>HOME</a>
          </div>
          <div
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'about')}
          >
            <a href='#about'>ABOUT</a>
          </div>
          <div
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'services')}
          >
            <a href='#services'>SERVICES</a>
          </div>
          <div
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'skills')}
          >
            <a href='#skills'>SKILLS</a>
          </div>
          <div
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'projects')}
          >
            <a href='#projects'>PROJECTS</a>
          </div>
          <div
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'contact')}
          >
            <a href='#contact'>CONTACT</a>
          </div>

          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-800" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          padding-bottom: 10px;
          cursor: pointer;
          color: white;
          font-weight: normal;
        }

        .nav-link.active {
          font-weight: bold;
          color: white; /* Adjust color for active link */
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background-color: tealblue; /* Adjust to your blue color */
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default Navbar;
