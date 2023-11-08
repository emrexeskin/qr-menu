"use client"
import { useEffect,useState } from 'react';
import Category from '@/components/category'

export default function Home() {
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
    <main className="flex flex-col items-start justify-between pt-60 ">
      <section className='w-full overflow-y-scroll absolute top-[250px] left-0 right-0 bottom-0 !scroll-smooth '>
      {categoriesAndProducts.categories.map((category, index) => (
        <Category key={index} products={categoriesAndProducts.products} name={category.name}/>
      ))}
      </section>
      
    </main>
  );
}