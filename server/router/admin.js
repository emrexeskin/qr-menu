const express=require('express');
const router=express.Router();

const {addNewCategory,updateCategory,deleteCategory}=require('../controller/admin/categories')
const {addNewProduct,updateProduct,deleteProduct}=require('../controller/admin/menu')

//KATEGORİ
router.post('/AddNewCategory',addNewCategory);
router.put('/UpdateCategory',updateCategory);
router.delete('/DeleteCategory',deleteCategory);

//MENÜ
router.post('/AddNewProduct',addNewProduct);
router.put('/UpdateProduct',updateProduct);
router.delete('/DeleteProduct',deleteProduct);

module.exports=router;