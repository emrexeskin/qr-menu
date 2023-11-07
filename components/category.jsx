import React from 'react'
import Product from './product'
;
function Category({ name,products }) {
  const categoryProducts = products.filter(product => product.category === name);
  return (
    <section className='flex items-start flex-col justify-between w-11/12 mb-12 gap-2 ' id={name}>
      <h1 className='text-[20px] bold'>{name}</h1>
      <div className='flex flex-col items-center justify-start w-full gap-2'>
      {categoryProducts.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} image={product.imageUrl} />
        ))}
      </div>
        
    </section>
  )
}

export default Category