const { doctor, normal_user } = require("../Modals/User");

const list_patient= async(req,res)=>{
   const {username,phone,disease,reports,city,location,email}=req.body;
const doctor_detail=req.params.doc_id;
    try {
       const doctor_valid= await doctor.findById(doctor_detail);
       if (!doctor_valid) {
        return res.status(404).send("doctor not found");
       }
       const userexist= await normal_user.findOne({email})
       if (!userexist) {
        return res.status(404).send("User not found")
       }
       const doctor_name=req.user.username;
       const userreport= await listed_user.create({username,phone,email,doctor_name,disease,reports,doctor_detail,city,location})
      return res.status(200).json({userreport});
    } catch (error) {
        console.log(error,"error in report creation")
        return res.status(500);
    }
}
module.exports=list_patient;