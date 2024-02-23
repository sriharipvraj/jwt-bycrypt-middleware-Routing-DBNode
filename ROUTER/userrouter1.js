const express = require("express");
const schemafunction1=require("../CONTROLLER/usercontroller1");
const getDataFromDb = require("../CONTROLLER/gettingData");
const passwordSchema = require("../CONTROLLER/passwordcontroller");
const tokenFunction = require("../CONTROLLER/tokencontroller");
const protect = require("../middleware/tokenvarification");
const middleware=[protect]


const router2=express.Router();

// router2.route("/addp").post(schemafunction1);
// router2.route("/get").get(getDataFromDb);
// router2.route("/hash").post(passwordSchema);
// router2.route("/jWt").post(middleware,tokenFunction);
// router2.route("/token").post(tokenFunction);



module.exports=router2;


