const mongoose=require("mongoose");

const tokenschema = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const token=mongoose.model("token",tokenschema)
module.exports=token