import React from 'react'
import Product from './product'
import CategoryHeader from './category-header'
function Category() {
  return (
    <section className=' flex items-center flex-col justify-between w-full mt-10'>
      <CategoryHeader></CategoryHeader>
      <div className='flex items-center justify-between w-full gap-2 flex-wrap mt-3'>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      </div>
        
    </section>
  )
}

export default Category