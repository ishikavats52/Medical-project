const { normal_user, doctor } = require("../Modals/User");
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")
const nodemailer = require('nodemailer');
const register_user = async (req, res) => {
  const {
    username,
    phone,
    email,
    password,
    country,
    degreecode,
    certificate,
    category,
    location,
  } = req.body;

  try {
    const userexist = degreecode
      ? await doctor.findOne({ email })
      : await normal_user.findOne({ email });

    if (userexist) {
      // Return 409 Conflict if user already exists
      return res.status(409).json({
        error: "User already exists. Please use a different email address or log in.",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 100000);

    const hashpassword = await bcrypt.hash(password, 10);

    var transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'ashtyn99@ethereal.email',
        pass: '4UxYuhCpuTgVqARpyr',
      },
    });

    var mailOptions = {
      from: 'ashtyn99@ethereal.email',
      to: `${email}`,
      subject: 'Your OTP Verification Code',
      text: `Hi ${email},\n\nYour OTP is: ${otp}\n\nPlease do not share this code with anyone.\n`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Email sending error:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const usercreated = !degreecode
      ? await normal_user.create({
          username,
          phone,
          email,
          password: hashpassword,
          country,
          otp,
        })
      : await doctor.create({
          username,
          phone,
          email,
          password: hashpassword,
          country,
          otp,
          degreecode,
          certificate,
          category,
          location,
        });

    req.email = email;
    return res.status(201).json({ usercreated });

  } catch (error) {
    console.error("Error in register_user:", error);
    return res.status(500).json({
      error: "Internal Server Error. Please try again later.",
    });
  }
};

const login= async (req,res)=>{
const {email,password,isdoc}=req.body;
try {
  // console.log(isdoc)
  const userexist= await doctor.findOne({email}) || await normal_user.findOne({email});
  // console.log(userexist)
  if (!userexist) {
    console.log("hitting")
    return res.status(404).json({error:"not exist"})
   

  }
  else{
    const verifypass= await bcrypt.compare(password,userexist.password);
    if (!verifypass) {
      return res.status(400).send("wrong password");
    }
 const token= jwt.sign({userexist},"ayushchauhanjwtkey",{expiresIn:"10day"})
 return res.status(200).json({userexist,token});


  }
} catch (error) {
  console.log(error)
  return res.status(500).send("server error");
}
}
const auth_otp= async (req,res)=>{
const {otp}=req.body;
const {email}=req.body;
try {
  const userexist= await normal_user.findOne({email})|| await doctor.findOne({email});
if (userexist) {
  if (userexist.otp==otp) {
    return res.status(200).send("valid user");
  }
}
return res.status(404);
} catch (error) {
  console.log(error)
}

}
module.exports={register_user,auth_otp,login}