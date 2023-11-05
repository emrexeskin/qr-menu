
import {React} from 'react'
import { categories } from '@/lib/data';
import Link from 'next/link';


function Navigation() {
 
  return (
    
    <section className='flex items-center justify-start px-5 bg-white'>
    
        <nav>
      <div className='flex overflow-x-auto items-center justify-start gap-5 py-4 px-3 list-none'>
        {categories.map((category) => (
          <div key={category.hash} className='px-2 text-center bg-black text-white'>
            <Link href={"#"+category.hash}>
              {category.name}
            </Link>
        
          </div>
          
        ))}
      </div>
    </nav>
    </section>
  )
}


export default Navigation