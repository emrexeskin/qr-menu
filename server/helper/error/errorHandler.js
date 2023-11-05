
const customErrorHandler=(err,req,res,next)=>{
    if(err.message.includes('Cannot set properties of null') ||err.message.includes('required'))
        err.message="Lütfen bütün alanları doldurunuz !";
    
    res.status(err.status || 500).json({
        success:false,
        message:err.message
    });
}

module.exports=customErrorHandler;