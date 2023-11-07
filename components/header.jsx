import React from 'react'
import {SiNike} from "react-icons/si";
import HamburgerMenu from './hamburger-menu';
function Header() {
  return (
    <header className='flex items-center justify-between h-[50px] w-full bg-white fixed z-10 px-5 fixed'>
      <div className='flex items-center justify-center h-[32px] w-[32px]'> 
      <SiNike className='h-[32px] w-[32px] text-black'/>
      </div>
      
      <HamburgerMenu></HamburgerMenu>
    </header>
  )
}

export default Header