const password=require("../MODEL/userschema2")
const bcrypt = require("bcrypt");
const { get } = require("../ROUTER/testrouter");


const passwordSchema= async(req,res)=>{
    const {Name,Email,Password}=req.body
    

    // const getData = await password.findOne({LoginCode});
    // console.log(getData);
    // console.log(getData.LoginCode);
    

    // if(getData){
    //     if(Email==getData.Email&& (await bcrypt.compare(LoginCode,getData.LoginCode)))
    //     {
    //         res.json("log in sucessful");
    //     }
    //     else{
    //         res.json("password incorrect");
    //     }
    // }
    // else{
    //     res.json("user not found ");
    // }
  

    const salt= await bcrypt.genSalt(10);
    const hashing= await bcrypt.hash(Password,salt)
    // const valid =   await bcrypt.compare(Password,getData.LoginCode)

 

    const passwordDetails=await password.create({
        Name,
        Email,
        Password:hashing
        
        
        
        
    })
    res.json(passwordDetails);

}








module.exports=passwordSchema;