const mongoose = require("mongoose");

const user1schema = mongoose.Schema({
    Userid:{type:Number},
    Email:{type:String},
    Password:{type:String}
})
const user1=mongoose.model("user1",user1schema)
module.exports=user1