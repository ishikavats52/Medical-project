const jwt = require("jsonwebtoken");
const { normal_user } = require("../Modals/User");
// All middleware
const authmid = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }


    const jwttoken = token.replace("Bearer ", "").trim();
    const isverified = jwt.verify(jwttoken, "ayushchauhanjwtkey");

    if (!isverified ||!isverified.userexist) {
      return res.status(401).send("Unauthorized: Invalid token");
    }

    const useremail=isverified.userexist.email;
    console.log(isverified.userexist.email )
    const verifieduser = await normal_user.findOne({email:useremail}).select({
      password: 0,
    });
console.log(verifieduser)
    if (!verifieduser) {
      return res.status(404).send("User not found");
    }

    req.emaildata =verifieduser.email;
    console.log(req.emaildata)
    req.username = verifieduser.username;

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};


const doctor_login = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");

    }

    const jwttoken = token.replace("Bearer ", "").trim();
    const isverified = jwt.verify(jwttoken, "ayushchauhanjwtkey");
console.log( isverified)
    if (!isverified) {
      return res.status(401).send("Unauthorized: Invalid token");
    }

    req.user = isverified.userexist;
console.log(req.user)
    if (!isverified.isdoctor==0) {
      return res.status(403).send("Forbidden: You are not a doctor");
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};


module.exports = { authmid, doctor_login };



