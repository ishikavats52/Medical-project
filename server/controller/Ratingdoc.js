
const { normal_user, doctor } = require("../Modals/User");
const rate = require("../Modals/rating");

const ratedata=async (req,res)=>{
const email=req.emaildata;
const username= req.username;
const {doc_id,docname,docemail,star,review}= req.body;


try {
const userexist= await normal_user.findOne({email})
console.log(doc_id)
const docexist= await doctor.findOne({email:docemail});
console.log(docexist)
if (!userexist) {
    return res.status(404).send("user not found")
    
}
if (!docexist) {
    return res.status(404).send(" doctor not found")
    
}



   const createrate= await rate.create({username,email,doc_id,docname,rating:star,review:review}) ;
   return  res.status(200).json({createrate})


} catch (error) { 
    console.log(error)
}
}

const sendratings= async(req,res)=>{
try {
    const data= await rate.aggregate([{
$group:{
    _id:"$doc_id",
    count:{$sum:1},
    avgrating:{$avg:"$rating"}
}
    }]);
    res.status(200).json({data})} catch (error) {
    console.log(error)
}
}
module.exports= {ratedata, sendratings};

