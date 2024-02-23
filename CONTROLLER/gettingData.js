const user = require("../MODEL/userSchema");
const product = require("../MODEL/userschema1");


 
// const getDataFromDb= async(req,res)=>{

//     const _id= req.params.id;
//     // console.log(identity);

//     const getById = await product.findById({_id})
//     res.send(getById);
    
    
// }
const getDataFromDb= async(req,res)=>{

    // const _id= req.params.id;
    // console.log(identity);
    

    const getById = await product.find()
    res.send(getById);  
    
    
}


module.exports=getDataFromDb