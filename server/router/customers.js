const express=require('express');
const router=express.Router();

const {getAllCategoriesAndProductsController}=require('../controller/customers');

router.get('/getAllCategoriesAndProducts',getAllCategoriesAndProductsController);


module.exports=router;