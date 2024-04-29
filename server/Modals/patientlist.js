const {Schema ,model}= require("mongoose");
const userlistbydoc=  new Schema({
    username:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    doctor_name:{
        required:true,
        type:String
    },
    disease:{
        required:true,
        type:String
    },
reports:[{
    type:Buffer,
   
}],
doctor_detail:{
    type:Schema.Types.ObjectId,
    ref:"doctor_schema",
    required:true
},
city:{
    type:String,
    required:true
},
location:[{
    type:String,
    required:true
}]

},{timestamps:true})
const listed_user= new model("medical_details_user",userlistbydoc);
module.exports=listed_user;