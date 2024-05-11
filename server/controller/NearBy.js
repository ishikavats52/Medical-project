const { doctor } = require("../Modals/User");
const nodemailer = require('nodemailer');

const Findnearby = async (req, res) => {

    const { location,disease,address } = req.body;
const email= req.emaildata;
const phone=req.phone;
console.log(location)
    try {
        const neardoc = await doctor.aggregate([{
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: location.coordinates,
                },
                distanceField: "dist.calculated",
                maxDistance: 5000,
                query: { category: "doctor" },
                includeLocs: "dist.location",
                spherical: true
            }
        }]);
console.log(neardoc)
        return res.status(200).json({ neardoc });

       
       
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};

module.exports = { Findnearby };
