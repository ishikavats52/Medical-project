const express= require("express");
const { register_user, auth_otp, login} = require("../controller/user_Auth");
const { Findnearby } = require("../controller/NearBy");

const {authmid,doctor_login}= require("../middleware/Middleware");
const list_patient = require("../controller/patient_reg");

const route= express.Router();
route.post("/user",register_user);
route.post("/login",login);
route.post("/otp",auth_otp);

route.get("/nearby",authmid,Findnearby);
route.post("/list_patient/:doc_id",doctor_login,list_patient)

module.exports=route;   