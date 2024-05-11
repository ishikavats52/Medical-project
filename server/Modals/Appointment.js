const {Schema,model}= require("mongoose");
const appointment= new Schema({
    doctoremail:{
        type:String,
        required:true
    },
    appointments:[{
        type:Schema.Types.ObjectId,
        ref:"appointment_status"
    }]
},{timestamps:true});
const appointmentdata= new model("appointments",appointment);


const user_status= new Schema({
    Patientname:{
        type:String,
        required:true
    },
    Doctor_id:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    query:{
type:String,
required:true
    },
    Status:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
},{timestamps:true})
const appointmentstatus= new model("appointment_status",user_status)

module.exports= {appointmentdata,appointmentstatus};