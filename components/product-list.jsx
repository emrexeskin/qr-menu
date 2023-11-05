import React from 'react'
import ProductListItem from './product-list-item'
function ProductList() {
  return (
    <div className='flex flex-col items-center justify-center w-5/6'>
       <h1 className="text-2xl font-semibold mb-4 text-center">Ürünler</h1>
          <ProductListItem></ProductListItem>
          <ProductListItem></ProductListItem>
          <ProductListItem></ProductListItem>
          <ProductListItem></ProductListItem>
          <ProductListItem></ProductListItem>
          <ProductListItem></ProductListItem>
          <ProductListItem></ProductListItem>

    </div>
  )
}

export default ProductList