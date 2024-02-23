const user1 = require("../MODEL/user1schema");
const user=require("../MODEL/userSchema");
const bcrypt=require("bcrypt")
const jwt= require("jsonwebtoken")



const schemafunction = async(req,res)=>{
    // console.log("schema funtion is working ");

    const {Name,Email,Password}=req.body
    // const data= await user.findOne({Email})
    // console.log(data);
    // console.log(data.Password);


    // if(data){
    //     if(Email==data.Email&&(await bcrypt.compare(Password,data.Password))){
    //         res.json("log in sucessful")
    //     }
    //     else{
    //         res.json("log in failed")
    //     }
    // }
    // else{
    //     res.json("user not found")
    // }



    // const salt=await bcrypt.genSalt(10);
    // const hashing = await bcrypt.hash(Password,salt)


    


    //     const userDetails=await user.create({
    //     Name,
    //     Email,
    //     Password
    // })
    // res.json({
    //     Name:userDetails.Name,
    //     Email:userDetails.Email,
    //     Password:userDetails.Password,
    //     Token:tokenGeneration(userDetails.Name)
    // })

    // const _id=req.params.id.trim()
    // const update = await user.findByIdAndUpdate(_id,{Name,Email,Password})
    const del = await user.findByIdAndRemove(_id)
    res.send("user removed ")
    res.json(del);
    // res.json(update)

}

const tokenGeneration = (id)=>{
    return jwt.sign({id},process.env.JWT_S,{
        expiresIn:'1d',
    })
}

module.exports=schemafunction;