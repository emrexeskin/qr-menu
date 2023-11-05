const asyncHandler=require('express-async-handler');
const categoryModel=require('../../models/Database/categories');
const CustomError=require('../../models/Error/customError');

const addNewCategory=asyncHandler(async(req,res,next)=>{
    const {categoryName}=req.body;
    
    const createdCategory = await categoryModel.create({name:categoryName});

    res.status(200).json({
        success:true,
        message:"Kategori başarıyla eklendi",
        category:createdCategory.name
    })
});

const updateCategory=asyncHandler(async(req,res,next)=>{
    const {oldCategoryName,newCategoryName}=req.body;

    const updateCategory = await categoryModel.findOne({name:oldCategoryName});

    if(updateCategory==null)
       return next(new CustomError("Böyle bir kategori bulunamadı !",400));

    updateCategory.name=newCategoryName;

    await updateCategory.save();

    res.status(200).json({
        success:true,
        message:"Kategori başarıyla güncellendi",
        updatedCategory:updateCategory.name
    })
});

const deleteCategory=asyncHandler(async(req,res,next)=>{
    const {categoryName}=req.body;

    const deletedCategory = await categoryModel.findOneAndDelete({name:categoryName});

    if(deletedCategory==null)
       return next(new CustomError("Böyle bir kategori bulunamadı !",400));

    res.status(200).json({
        success:true,
        message:"Kategori başarıyla silindi",
        deletedCategory:deletedCategory.name
    })
});

module.exports={addNewCategory,updateCategory,deleteCategory}