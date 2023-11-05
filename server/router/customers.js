const express=require('express');
const router=express.Router();

const {getAllCategoriesAndProducts}=require('../controller/customers');

router.get('/getAllCategoriesAndProducts',getAllCategoriesAndProducts);


module.exports=router;