const asyncHandler=require('express-async-handler');
const productModel=require('../../models/Database/products');

const addNewProduct=asyncHandler(async(req,res,next)=>{
    const {productName,productPrice,productImage,productCategory}=req.body;
    const productDatas={name:productName,category:productCategory,price:productPrice,imageUrl:productImage};

    const createdProduct=await productModel.create(productDatas);

    res.status('200').json({
        success:true,
        message:"Ürün başarıyla eklendi",
        product:{
            name:createdProduct.name,
            price:createdProduct.price,
            category:createdProduct.category,
            imageUrl:createdProduct.imageUrl
        }
    });
});
const updateProduct=asyncHandler(async(req,res,next)=>{
    const {oldProductName,oldProductCategory,newProductName,newProductPrice,newProductImage,newProductCategory}=req.body;

    const product=await productModel.findOne({name:oldProductName,category:oldProductCategory});

    product.name=newProductName;
    product.price=newProductPrice;
    product.imageUrl=newProductImage;
    product.category=newProductCategory;

    await product.save();

    res.status(200).json({
        success:true,
        message:"Ürün başarıyla güncellendi",
        updatedProductInfos:product
    });

});
const deleteProduct=asyncHandler(async(req,res,next)=>{
    const {productName,productCategory}=req.body;

    const deletedProduct=await productModel.findOneAndDelete({name:productName,category:productCategory})

    res.status(200).json({
        success:true,
        message:"Ürün başarıyla silindi",
        deletedProduct
    });
});

module.exports={addNewProduct,updateProduct,deleteProduct}