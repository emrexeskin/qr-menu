const express=require('express');
const router=express.Router();

const {getAllCategoriesAndProducts}=require('../controller/customers/menu');

router.get('/GetAllCategoriesAndProducts',getAllCategoriesAndProducts);


module.exports=router;