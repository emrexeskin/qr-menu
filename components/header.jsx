import React from 'react'
import {SiNike} from "react-icons/si";
import Link from 'next/link';
import WaiterButton from './waiter-button';
function Header() {
  return (
    <header className='flex items-center justify-between w-full h-[90px] px-8'>
      <Link href="/qr">
      <SiNike className='h-[32px] w-[32px] text-black'></SiNike>
      </Link>

      <WaiterButton></WaiterButton>
    </header>
  )
}

export default Header