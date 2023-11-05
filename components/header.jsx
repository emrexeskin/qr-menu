import React from 'react'
import {SiNike} from "react-icons/si";
import Navigation from '@/components/navigation';
function Header() {
  return (
    <header className='flex items-center justify-between h-[50px] w-full bg-white fixed z-10 flex-col fixed'>
      <div className='flex items-center justify-between w-full shadow-md px-5 opacity-95'>
      <SiNike className='h-[32px] w-[32px] text-black'/>
      <button className='object-cover rounded text-black text-[16px] h-[48px]'>Language</button>
      </div>
      <Navigation></Navigation>
    </header>
  )
}

export default Header