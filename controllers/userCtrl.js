const Users=require('../models/userModel')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userCtrl={
         register: async(req,res)=>{
             try{
              const{name,email,password}=req.body;
              const user= await Users.findOne({email})
              if(user)return res.status(400).json({msg:"The email already exists"})
              if (password.length <6)
              return res.status(400).json({msg:"Password is at least 6 chars long"})
              //Password encryption
              const passwordHash=await bcrypt.hash(password,10)
              const newUser=new Users({name,email,password:passwordHash})
              //save mongodb
              await newUser.save()
              
              //then create jsonwebtoken to authentication
              const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})
            res.json({msg:"Register Success"})
            
            }catch(err){
                 return res.status(500).json({msg:err.msg})
             }
         }

}
const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}
module.exports=userCtrl