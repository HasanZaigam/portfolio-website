import {Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props{
    openNav: () => void
}
const Navbar = ({openNav}: Props) => {
  return (
    <section id='home'>
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
             HASAN
                <span className='text-blue-700'>ZAIGAM</span>
            </h1>
            <div className='nav-link'><a href='#index'>HOME</a></div>
            <div className='nav-link'><a href='#about'>ABOUT</a></div>
            <div className='nav-link'><a href='#services'>SERVICES</a></div>
            <div className='nav-link'><a href='#skills'>SKILLS</a></div>
            <div className='nav-link'><a href='#projects'>PROJECTS</a></div>
            <div className='nav-link'><a href='#contact'>CONTACT</a></div>

            <div onClick={openNav}>
                <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-800" />
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default Navbar;