import React from 'react'
import {BsArrowLeft} from "react-icons/bs";
function Cart() {
  return (

    <div className="flex items-center justify-center w-full h-16">
    <BsArrowLeft className="mr-2 h-6 w-6 text-gray-500" />
    <h1 className="text-2xl text-center">Sepetim</h1>
  </div>
  )
}

export default Cart