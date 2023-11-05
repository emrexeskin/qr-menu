import React from 'react'
import Product from './product'
;
function Category({ name,products }) {
  const categoryProducts = products.filter(product => product.category === name);
  return (
    <section className='flex items-center flex-col justify-between w-full mt-4' id={name}>
      <h1 className='text-[32px]'>- {name} -</h1>
      <div className='flex items-center justify-between w-full gap-2 flex-wrap'>
      {categoryProducts.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} image={product.imageUrl} />
        ))}
      </div>
        
    </section>
  )
}

export default Category