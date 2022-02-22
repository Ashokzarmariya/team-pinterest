require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require('../models/user.model')

const newToken =(user) =>{
    return jwt.sign({user:user},process.env.JWY_ACCESS_KEY)
}
const register = async (req,res)=>{
    try{
    //check if email exist or not
        let user = await User.findOne({email: req.params.email}).lean().exec()
    //if there throw an error
        if(user) 
         return res.status(400).json({status:"failed",message:"Please provide diffrent email address"});
    //else create user and  we will hash the password // we do hashing in user.model file
        user = await User.create(req.body);
     

    //we will create the token 
        const token =newToken(user);

    //return the user and the token 
    
    res.status(201).json({user,token});

    }
    catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }
};

const login =(req,res)=>{
    res.status(201).send("Login");
}

module.exports ={register,login};