import { doctor, normal_user } from "../Modals/User";
const emailfun=(user,email)=>{
    const otp=Math.floor(100000+ Math.random()*100000)
    console.log(otp)

     var transporter =  nodemailer.createTransport({
       host: 'smtp.ethereal.email',
       port: 587,
         auth: {
           user: 'ashtyn99@ethereal.email',
           pass: '4UxYuhCpuTgVqARpyr'
         }
       });
       
       var mailOptions = {
         from: 'ashtyn99@ethereal.email',
         to: `${email}`,

         subject: 'Your OTP Verification Code',
         text: `
         Hi ${user},
         
         To proceed with your request, please use the following One-Time Password (OTP) to complete the verification process.
         
         Your OTP is: ${otp}
         
         Please note that this OTP is valid for [validity period, e.g., 10 minutes]. For security reasons, do not share this code with anyone. If you did not request this OTP, please let us know immediately.
         
         If you have any questions or need further assistance, feel free to reply to this email, and we'll be happy to help.
         
         Best regards,
         
        Medico
         }`

       };
       
       transporter.sendMail(mailOptions, function(error, info){
         if (error) {
           console.log(error);
           
           
         } else {
           console.log('Email sent: ' + info.response);
         }
       });
       return otp;
}
const forget= async(req,res)=>{
const {email,password,otp}= req.body;
    try {
        const userexist= await normal_user.findOne({email})|| await doctor.findOne({email})
        if (!userexist) {
            return res.status(404).send(" user not found")
        }
        if (userexist.isdoctor==1) {
           const otpfrommail= emailfun(userexist.username,email)
           if (otp==otpfrommail) {
            const updatedoc= await doctor.findOneAndUpdate({email},{password:password},{new:true})
           }
           
        }
    } catch (error) {
        
    }
}

const send_otp= async (req,res)=>{
    const {email}= req.body;
try {
    
} catch (error) {
    
}
}