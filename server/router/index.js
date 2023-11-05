const express=require('express');
const router=express.Router();

const customersRouter=require('./customers');
const adminRouter=require('./admin');


router.use('/customers',customersRouter);
router.use('/admin',adminRouter);



module.exports=router;