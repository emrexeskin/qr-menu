const asyncHandler=require('express-async-handler')
const categoryModel=require('../models/categories');
const productsModel=require('../models/products');


const getAllCategoriesAndProducts = asyncHandler(async (req,res,next) =>{

    const categories=await categoryModel.find({});
    const products=await productsModel.find({});

    
    if(categories.length==0 || products.length==0)
       return res.status(500).json({
            success:false,
            message:"Hiç ürün veya kategori bulunamadı"
        })
    

    res.status(200).json({
        success:true,
        categories,
        products
    })
});

module.exports={getAllCategoriesAndProducts}