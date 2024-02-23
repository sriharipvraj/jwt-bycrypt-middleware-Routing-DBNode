const user1=require("../MODEL/user1schema")
const bcrypt=require("bcrypt")

const user1Function=async(req,res)=>{
    const{Userid,Email,Password}=req.body


    // const data1 = await user1.findOne({Userid})
    // // console.log(data1);

    // if(data1){
    //     if(Userid==data1.Userid&&(await bcrypt.compare(Password,data1.Password))){
    //         res.json("logged in ")
    //     }
    //     else{
    //         res.json("log in failed ")
    //     }
    // }
    
    
    // else{
    //     res.json("user not found ")
    // }

    // const salt=await bcrypt.genSalt(10);
    // const hashing=await bcrypt.hash(Password,salt)

    const _id = req.params.id.trim()
    const update = await user1.findByIdAndUpdate(_id,{Email,Userid,Password})
    
    // const details =await user1.create({
    //     Userid,
    //     Email,
    //     Password
    // })
    res.json(update)
}

module.exports=user1Function;