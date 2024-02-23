const mongoose = require("mongoose");

const userschema1=mongoose.Schema({
    Product:{type:String},
    Price:{type:String},
    Image:{type:String},
    Stock:{type:Boolean}
})

const product=mongoose.model("product",userschema1);
module.exports=product;