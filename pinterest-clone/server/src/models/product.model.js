const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    Title:{type:String,required:true},
    img:{type:String,required:true},
    Name:{type:String,required:true},
    description:{type:String,required:true},
 
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema);