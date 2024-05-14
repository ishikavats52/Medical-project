const { appointmentdata, appointmentstatus } = require( "../Modals/Appointment");
const { doctor, normal_user } = require( "../Modals/User");
const bookappointment = async (req, res) => {
    const doctoremail = req.emaildata;
    const Doctor_id = req.params.Id;
    const patientname =  req.username ;
    const { date, query, status, time } = req.body;
    console.log(query);console.log(status)
    console.log(req.body,doctoremail,Doctor_id,patientname)
    console.log("hi")
    try {
       
        if (!patientname) {
            return res.status(400).json({ message: "Patientname is required" });
          }
      
          if (!status) {
            return res.status(400).json({ message: "Status is required" });
          }
      
      const doctorExists = await doctor.findById(Doctor_id);
      if (!doctorExists) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      const appointment = await appointmentstatus.create({
        Patientname:patientname,
        Doctor_id,
        date,
        query,
        Status:status,
        time,
      });
  
      const { _id } = appointment;
  console.log(_id)
      const doctorList = await appointmentdata.findOne({ doctoremail });
      if (!doctorList) {
        await appointmentdata.create({ doctoremail, appointments: _id });
      } else {
        await appointmentdata.findOneAndUpdate(
          { doctoremail },
          { $push: { appointments: _id } }
        );
      }
  console.log(appointment)
      return res.status(200).json({ message: "Appointment booked successfully", appointment });
  
    } catch (error) {
      console.error("Error booking appointment:", error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  // const sendappointmentstodoc= async ()=>{
  //   try {
  //     const{}
  //   } catch (error) {
      
  //   }
  // }
  
  module.exports = { bookappointment };
  