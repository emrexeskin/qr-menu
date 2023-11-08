import React from 'react'
import Product from './product'
;
function Category({ name,products }) {
  const categoryProducts = products.filter(product => product.category === name);
  return (
    <section className='flex items-start flex-col justify-between w-11/12 mt-4 gap-1 pl-8 scroll-mt-2' id={name}>
      <h1 className='text-[18px] bold'>{name}</h1>
      <div className='flex flex-col items-center justify-start w-full gap-2'>
      {categoryProducts.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} image={product.imageUrl} />
        ))}
      </div>
        
    </section>
  )
}

export default Category