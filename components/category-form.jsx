import React from 'react'

function CategoryForm() {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-semibold mb-4 text-center">Kategori Ekle</h1>
    <form className="space-y-4"/>
      <div>
        <label htmlFor="name">Kategori Adı</label>
        <input
          type="text"
          id="category"
          name="category"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
      >
        Kategori Ekle
      </button>
      </div>
      
  )
}

export default CategoryForm