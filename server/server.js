const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
require("dotenv").config({path: "./config/config.env"});

const connectDb=require('./helper/database/connectDb');
const routerIndex=require('./router/index');

const app=express();
const port=process.env.PORT;

app.use(cors({
    credentials:true,
    origin:["http://localhost:3000"]
}));
app.use(express.json());
app.use(cookieParser());


app.use('/api',routerIndex);



app.listen(port,()=>{
console.log(`Backend server ${port} portunda ayaga kalkti`);
connectDb();
});