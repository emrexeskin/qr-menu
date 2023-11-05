"use client"
import React from 'react'
import { useState } from 'react';
function ProductForm() {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        image: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Ürünü eklemek için yapmanız gereken işlemleri burada gerçekleştirin.
        console.log('Eklenen Ürün:', product);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
  return (
    <div className="p-4">
    <h1 className="text-2xl font-semibold mb-4 text-center">Ürün Ekleme Formu</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">Ürün Adı</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="category">Kategori</label>
        <select id="cars" className='px-2 border-2 h-[40px] rounded'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Fiyat</label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="image">Ürün Fotoğrafı</label>
        <input
          type="file"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Ürünü Ekle
      </button>
    </form>
  </div>
  )
}

export default ProductForm