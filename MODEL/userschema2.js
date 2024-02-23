const mongoose = require("mongoose");

const passwordHashing = mongoose.Schema({

    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const password=mongoose.model("password",passwordHashing);
module.exports=password;