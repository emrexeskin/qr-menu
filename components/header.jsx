import React from 'react'
import {SiNike} from "react-icons/si";
import Link from 'next/link';
import ScrollNav from './scroll-nav';
function Header() {
  return (
    <header className='flex flex-col items-center fixed w-full bg-white z-10'>
      <div className='flex items-center justify-between h-[50px] w-full px-5 shadow-[0_0_10px_0_rgba(0,0,0,0.3)]'> 
      <Link href="/qr"
      >
      <SiNike className='h-[32px] w-[32px] text-black'></SiNike>
      </Link>
      <button className=' flex flex-wrap items-center justify-center text-center h-2/3 px-3 py-1 bg-gray-100 rounded-full text-[12px] tracking-wide font-light'>☝ Bi' Garson</button>
      </div>
      <ScrollNav></ScrollNav>
    </header>
  )
}

export default Header