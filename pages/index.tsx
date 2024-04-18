import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import Icons from '@/components/Icons';

const HomePage= () => {
  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <section id='index'>
       <div className="overflow-x-hidden">
       <div>
        {/*Navbar Section */}
        <MobileNavbar nav={nav} closeNav ={closeNav}  />
        <Navbar openNav={openNav} />
        {/* Hero Section*/}
        <Hero />
        <Icons/>
        {/*About Section*/}
        <div className=' relative z-[30]' >
          <About />
          
        {/* Section*/} 
        <Services />
        {/*Skills section */}
        <Skills/>
        <Project />
       
        <Footer />
        </div>
       </div>
    </div>
    </section>
  );
  }
export default HomePage;