"use client"
import React, { useState, useEffect } from "react";
import {PiHamburgerLight} from "react-icons/pi";
import Link from "next/link";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [categoriesAndProducts, setCategoriesAndProducts] = useState({
    success:false,
    products:[],
    categories:[]
  });
  useEffect(()=>{
    fetch('http://localhost:3010/api/customers/GetAllCategoriesAndProducts')
    .then((res=>res.json()))
    .then(data=>{setCategoriesAndProducts(data)})
  },[]);

  return (
    <div>
      <button
        className=" flex items-center justify-center w-10 h-10 m-2 text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <PiHamburgerLight className="text-[24px]"></PiHamburgerLight>
      </button>
      {isOpen && (
        <div className=" bg-white absolute top-16 left-0 right-0 border-b border-gray-200 z-10 m-0">
                    {categoriesAndProducts.categories.map((category) => (
          <ul  className='my-2 text-center'>
            <li key={category.name} className="my-2">
            <Link href={`#${category.name}`}>
              {category.name}
            </Link>
            </li>
          </ul>
          
        ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
