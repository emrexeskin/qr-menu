import React from 'react'

function Product() {
  return (
    <div className=" px-5 py-3 bg-[url('/latte.jpg')] flex items-start justify-end flex-col rounded-md h-[200px] w-1/2 bg-center bg-cover shadow-inset md:shadow-none md:hover:shadow-md grow basis-1/3">
      <h3 className='text-white text-[24px]'>Latte</h3>
      <p className='text-white text-[16px]'>29.90</p>
    </div>
  )
}

export default Product