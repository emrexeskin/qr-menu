import React from 'react'
import Product from './product'
import { products } from '@/lib/data';
;
function Category({ name, hash }) {
  const categoryProducts = products.filter(product => product.category === name);
  return (
    <section className=' flex items-center flex-col justify-between w-full mt-4' id={hash}>
      <h1 className='text-[32px]'>{name}</h1>
      <div className='flex items-center justify-between w-full gap-2 flex-wrap mt-3'>
      {categoryProducts.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
        
    </section>
  )
}

export default Category