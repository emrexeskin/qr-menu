import React from 'react'
import { FiTrash , FiEdit3 } from "react-icons/fi";
function ProductListItem() {
  return (
    <div className='flex items-center justify-between w-full m-4 bg-gray-100 gap-1 px-2 py-3 rounded-md flex-wrap'>
       
    <img src='/latte.jpg' className='h-[72px] w-[72px] rounded'></img>
    <p className='text-gray text-center'>Kahve</p>
    <p className='text-gray text-center'>Latte</p>
    <p className='text-gray text-center'>19.90</p>
    <div className='icons flex items-center justify-between gap-4'>
        <FiEdit3 className='text-[20px] text-blue-500'></FiEdit3>
        <FiTrash className='text-[20px] text-rose-500'></FiTrash>
    </div>
</div>
  )
}

export default ProductListItem