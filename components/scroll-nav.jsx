"use client"
import React,{ useState, useEffect } from 'react'
import Link from "next/link";

function ScrollNav() {
    const [categoriesAndProducts, setCategoriesAndProducts] = useState({
        success:false,
        products:[],
        categories:[]
      });
      useEffect(()=>{
        fetch('http://localhost:3010/api/customers/GetAllCategoriesAndProducts')
        .then((res=>res.json()))
        .then(data=>{setCategoriesAndProducts(data)})
      },[]);
  return (
   <section className=' w-full border-b my-1'>
    <ul className='flex items-start justify-between flex-row gap-4 overflow-x-scroll w-full h-full'>
    {categoriesAndProducts.categories.map((category) => (
          <li key={category._id} className='w-full px-5 py-2'>
            <Link href={`#${category.name}`} className='w-full flex flex-wrap whitespace-nowrap'>
              {category.name}
            </Link>
          </li>
        ))}
    </ul>
   </section>
  )
}

export default ScrollNav