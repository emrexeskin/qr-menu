import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
function Product({ name, price, image }) {
  console.log(image);
  return (
    <div className="flex items-center justify-between w-full h-full border-b border-gray-200 py-8">
    <div style={{backgroundImage:`url("${image}")`}}  className="rounded-md w-1/4 h-[90px] bg-center bg-cover bg-no-repeat"></div>
    <div className='flex flex-col items-start justify-between w-1/3'>
    <h3 className=' text-[20px] bold'>{name}</h3>
    <p className='break-words w-full text-gray-400 text-ellipsis line-clamp-2'>Domates,zeytin,pepperoni,biber ve mısır</p>
    </div>
    <div className='flex flex-col items-end justify-between w-1/4 gap-4'>
    <button className=' flex items-center justify-center p-2 border rounded-md w-1/2'><AiOutlinePlus></AiOutlinePlus></button>
    <p className='bold'>{price}TL</p>
    </div>
    
    </div>
    )
}

export default Product