import { doctor, normal_user } from "../Modals/User";

const forget= async(req,res)=>{
const {email,password}= req.body;
    try {
        const userexist= await normal_user.findOne({email})|| await doctor.findOne({email})
        
    } catch (error) {
        
    }
}