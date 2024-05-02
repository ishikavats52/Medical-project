const { doctor, normal_user } = require("../Modals/User");
const doctor_model = require("../Modals/doctorlist");
const listed_user= require("../Modals/patientlist")
const list_patient= async(req,res)=>{
   const {reports,city,location,email}=req.body;
const doctor_detail=req.user._id;
console.log(doctor_detail)
const doctor_name=req.user.username;
const doc_email=req.user.email;
console.log(doctor_detail)
    try {
       const doctor_valid= await doctor.findById(doctor_detail);
       if (!doctor_valid) {
        return res.status(404).send("doctor not found");
       }
       const userexist= await normal_user.findOne({email})
       if (!userexist) {
        return res.status(404).send("User not found")
       }
     
      console.log("docemail",doc_email)
    const finddata= await listed_user.findOne({email});
    const doctorlist= await doctor_model.findOne({email:doc_email});
    if (!finddata ) {
        const userreport= await listed_user.create({username:userexist.username,phone:userexist.phone,email,reports,doctor_detail:[doctor_detail],city,location});
       
        res.status(200).json({userreport});
    }
    if (!doctorlist) {
      const createdoc= await doctor_model.create({ doctor_name:doctor_name,email:doc_email,patient:[userexist]})
      console.log("usercreted1",createdoc)
      return ;
      
    }
      const updated= await listed_user.findOneAndUpdate({email},  { $push:{reports:reports, doctor_detail: doctor_detail } },{new:true});
      const updatedoc= await doctor_model.findOneAndUpdate({email:doc_email},{$push:{patient:userexist._id}},{new:true})
      console.log("usercreted2",updatedoc)
      return res.status(200).json({updated});
    } catch (error) {
        console.log(error,"error in report creation")
        return res.status(500);
    }
}
module.exports=list_patient;