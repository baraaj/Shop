require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const fileUpload=require('express-fileupload');
const cookieParser=require('cookie-parser');

const app=express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload(
    {useTempFiles:true}
))
//Routes
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))
//Connection to Mongo
const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    //useCreateIndex:true,
    //useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
},err =>{
    if(err) throw err;
    console.log('connected to MongoDB')
})
app.get('/',(req,res)=>{
    console.log("wsolna");
    res.json({msg:"Welcome Baraa"})
})
app.post('/',(req,res, next)=>{
    console.log("wsolna lenna");
    res.json({msg:"Welcome Baraa"})
    next()
})
 


const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log('Server is running on port',PORT)
})