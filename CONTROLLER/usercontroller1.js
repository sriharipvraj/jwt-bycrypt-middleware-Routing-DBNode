const product = require("../MODEL/userschema1");

const schemafunction1 = async(req,res)=>{
    const {Product,Price,Image,Stock}=req.body
    if(Product&&Price&&Image&&Stock){
    const productDetails=await product.create({
        Product,
        Price,
        Image,
        Stock
    })


    res.json(productDetails);
}
else{
    res.send("Incomplete")
}
}

module.exports=schemafunction1;