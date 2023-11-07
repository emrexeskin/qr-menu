import React from 'react'
import {CiSearch} from "react-icons/ci";
function SearchBar() {
  return (
    <section className='flex items-center justify-center px-8 w-full'>
    <div className="flex items-center justify-start pl-5 py-1 w-full h-[50px] border border-gray-300 rounded-2xl drop-shadow-sm focus:border-gray-700 ">
      <CiSearch className='w-[24px] h-[20px]'></CiSearch>
      <input
        type="text"
        placeholder="Menüde ara..."
        className="border p-2 rounded-l focus:outline-none border-none placeholder:text-[14px] placeholder:text-gray-400 text-gray-500  placeholder:text-light "
      />
    </div>
    </section>
  )
}

export default SearchBar