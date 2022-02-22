const mongoose = require("mongoose");
module.exports =()=>{
    //mongoose.connect('mongodb://127.0.0.1:27017/backendProject');

    try{
        mongoose.connect("mongodb+srv://raojipatil:patil@123@pinterest.u5z1d.mongodb.net/test",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
 }
