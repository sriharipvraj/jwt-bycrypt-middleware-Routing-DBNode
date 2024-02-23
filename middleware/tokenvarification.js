const jwt = require("jsonwebtoken")

const protect = async(req,res,next)=>{
    

    let token ;


    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,process.env.JWT_S);
            next()
        }

        catch(error){
            res.status(401).send("Login failed ");
            throw new Error("Not authorized,token");
        }
    }
    if(!token){
        res.status(401).send("No Token");
        throw new Error("Not authorized , no token");
    }
};

module.exports=protect