import React from 'react'

function Product({ name, price, image }) {
  const backgroundImage = `url('/${image}')`;
  return (
    <div style={{ backgroundImage }}  className="px-3 py-1 flex items-start justify-end flex-col rounded-md h-[200px] w-1/2 bg-center bg-cover shadow-[0px_-50px_20px_-1px_rgba(0,0,0,0.37)_inset] grow basis-1/3">
      <h3 className='text-white text-[20px]'>{name}</h3>
      <p className='text-white text-[16px]'>{price} ₺</p>
    </div>
  )
}

export default Product