import React from 'react';
import ProductList from '@/components/product-list';
import ProductForm from '@/components/product-form';
import CategoryForm from '@/components/category-form';
function Admin() {
  

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gap-10">
      <div className='flex items-start justify-between w-5/6'>
        <ProductForm></ProductForm>
        <CategoryForm></CategoryForm>
        </div>

    <ProductList></ProductList>
    </div>
  )
}

export default Admin;