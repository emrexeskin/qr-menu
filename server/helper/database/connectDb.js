const mongoose=require('mongoose');

const connectDb=()=>{
    mongoose.connect("mongodb+srv://ozanoztuna:HhiqnaPkY5FBAYvI@deneme.ornpayz.mongodb.net/")
    .then(()=>console.log("Veri tabanı bağlantısı başarılı"))
    .catch(err=>console.log(err));
}

module.exports=connectDb;