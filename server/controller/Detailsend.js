const { appointmentdata } = require("../Modals/Appointment");
const { normal_user, doctor } = require("../Modals/User");
const doctor_model = require("../Modals/doctorlist");
const listed_user = require("../Modals/patientlist");

const patient_data = async (req, res) => {
    try {
        const useremail = req.emaildata;
        console.log(useremail);
        const userexist = await normal_user.findOne({ email: useremail });
        console.log(userexist);
        if (!userexist) {
            return res.status(404).send("You are not a valid user")
        }
        const listeduser = await listed_user.findOne({ email: useremail }).select({ password: 0 });
        console.log(listeduser)
        if (!listed_user) {
            return res.status(404).send("No data found")
        }


        return res.status(200).json({ listeduser })
    } catch (error) {
        console.log(error)
    }
}

const userdetailtodoctor = async (req, res) => {
    const { email } = req.user;

    try {
        const userexist = await doctor.findOne({ email });
        if (!userexist) {
            return res.status(404).send("You are not a doctor")
        }
        const data = await doctor_model.findOne({ email: email }).select({ password: 0 });
        return res.status(200).json({ data })


    } catch (error) {
        console.log(error)
    }
}
const appointmentdetailsend = async (req, res) => {
    try {
        const {email} = req.user;
        const doctorexist = await appointmentdata.findOne({email});
        console.log(doctorexist);
        if (!doctoremail) {
            return res.status(404)
        }
        return res.status(200).json({ doctorexist });

    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}
module.exports = { patient_data, userdetailtodoctor, appointmentdetailsend };