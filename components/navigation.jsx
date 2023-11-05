import React from 'react'
import { categories } from '@/lib/data';
import Link from 'next/link';

function Navigation() {
  return (
    <section className='flex items-center justify-start px-3 bg-white'>
        <nav>
      <ul className='flex items-center justify-start gap-5 py-4 px-3'>
        {categories.map((category) => (
          <li key={category.hash} className='flex items-center justify-start px-2 text-center'>
            <Link href={category.hash}>
              {category.name}
            </Link>
        
          </li>
          
        ))}
      </ul>
    </nav>
    </section>
  )
}

export default Navigation