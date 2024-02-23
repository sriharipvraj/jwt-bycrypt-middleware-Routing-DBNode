
const jwt =  require("jsonwebtoken")
const token = require("../MODEL/tokenschema")

const tokenFunction = async(req,res) =>{
    const{Name,Email,Password}=req.body

    const data = await token.findOne({Email});
    console.log(data);
    if(data){
        res.json("user already registereed");
    }
    else{
        
    

    

    
    const tokenDetails = await token.create({
        Name,
        Email,
        Password
    })
    res.json({
        Name:tokenDetails.Name,
        Email:tokenDetails.Email,
        Password:tokenDetails.Password,
        Token:tokenGeneration(tokenDetails.Name)
    })


} 
}

const tokenGeneration = (id)=>{
    return jwt.sign({id},process.env.JWT_S,{
        expiresIn:'1d',
    })
}

module.exports=tokenFunction