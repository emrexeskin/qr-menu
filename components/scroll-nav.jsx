"use client"
import React,{ useState, useEffect } from 'react'
import Link from "next/link";
import clsx from 'clsx'
import styles from "@/styles/scroll-nav.module.css"
function ScrollNav() {
  const [activeCategory, setActiveCategory] = useState(null);
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
   <section className='w-full px-8 border-b my-1'>
    <ul className={`flex items-start justify-between flex-row gap-4 overflow-x-scroll w-full h-full ${styles.slider}`}>
    {categoriesAndProducts.categories.map((category) => (
          <li key={category._id} className='w-full pr-5 py-2'>
            <Link href={`#${category.name}`} className={clsx('w-full flex flex-wrap whitespace-nowrap text-light text-gray-400',
            {"text-gray-900 font-bold": activeCategory === category.name,})}  
            onClick={()=> setActiveCategory(category.name)}>
              {category.name}
            </Link>
          </li>
        ))}
    </ul>
   </section>
  )
}

export default ScrollNav