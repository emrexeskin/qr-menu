
const customErrorHandler=(err,req,res,next)=>{

    if(err.message=='Category validation failed: name: Path `name` is required.'){
        err.status=400;
        err.message="Kategori adını boş bırakamazsınız !";
    }
    if(err.message.includes('Cannot set properties of null'))
        err.message="Lütfen bütün alanları doldurunuz !";
    
    res.status(err.status || 500).json({
        success:false,
        message:err.message
    });
}

module.exports=customErrorHandler;