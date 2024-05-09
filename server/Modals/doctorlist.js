const {Schema,model}=require("mongoose");
const doctorlist= new Schema ({
    doctor_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    patient:[{
       type:Object,
       required:true
    }],
    
},{
   timestamps:true
})
const doctor_model= new model ("doctor_list",doctorlist);
module.exports=doctor_model;