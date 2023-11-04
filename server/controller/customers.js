const asyncHandler=require('express-async-handler')

const getAllCategoriesAndProducts = asyncHandler((req,res,next) =>{


    res.status(200).send("BÜTÜN ÜRÜNLERİ VE KATEGORİLERİ GETİR")
});

module.exports={getAllCategoriesAndProducts}