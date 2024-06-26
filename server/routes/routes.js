const express= require("express");
const { register_user, auth_otp, login} = require("../controller/user_Auth");
const { Findnearby } = require("../controller/NearBy");
const {authmid,doctor_login}= require("../middleware/Middleware");
const list_patient = require("../controller/patient_reg");

const {patient_data,userdetailtodoctor, appointmentdetailsend} = require("../controller/Detailsend");
const {ratedata,sendratings} = require("../controller/Ratingdoc");
const {bookappointment}= require("../controller/Appointment")

const route= express.Router();

// All routes
route.post("/user",register_user);
route.post("/login",login);
route.post("/otp",auth_otp);
route.post("/nearby",authmid,Findnearby);
route.post("/list_patient",doctor_login,list_patient)
route.get("/patient_data",authmid,patient_data)
route.get("/patient_data_to_doc",doctor_login,userdetailtodoctor)

// route.get("/ratingview",sendratings)
route.post("/Appointment/:Id",authmid,bookappointment)
route.get("/Appointmentstatus",doctor_login,appointmentdetailsend)


module.exports=route;   