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
    <main className="flex flex-col items-center justify-between pt-20 px-2 overflow-hidden">
      {categoriesAndProducts.categories.map((category, index) => (
        <Category key={index} products={categoriesAndProducts.products} name={category.name}/>
      ))}
     
    </main>
  );
}