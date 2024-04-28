const jwt = require("jsonwebtoken");
const { normal_user } = require("../Modals/User");




const authmid= async(req,res,next)=>{
try {
    const token=req.header("Autherization");
    if (!token) {
        return res.status(400).send("un-authorised user")
    }
    const jwttoken=token.replace("Bearer","")
const isverified=  jwt.verify(jwttoken,"ayushchauhanjwtkey");
const verifieduser= await normal_user.findOne({id:isverified._id}).select({
    password:0
});
req.emaildata=verifieduser.email;
req.username=verifieduser.username;
next()


} catch (error) {
    console.log(error);
}
}
module.exports=authmid