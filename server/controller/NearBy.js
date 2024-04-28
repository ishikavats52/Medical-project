const { doctor } = require("../Modals/User");
const nodemailer = require('nodemailer');

const Findnearby = async (req, res) => {
    const { location, email } = req.body;
    try {
        const neardoc = await doctor.aggregate([{
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: location.coordinates,
                },
                distanceField: "dist.calculated",
                maxDistance: 5,
                query: { category: "doctor" },
                includeLocs: "dist.location",
                spherical: true
            }
        }]);

        await res.status(200).json({ neardoc });

       
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'ashtyn99@ethereal.email',
                pass: '4UxYuhCpuTgVqARpyr'
            }
        });

        neardoc.forEach((elem) => {
            const mailOptions = {
                from: "ashtyn99@ethereal.email",
                to: elem.email,
                subject: "NEW USER QUERY",
                text: `${email} is finding a doctor. Contact them for details.`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};

module.exports = { Findnearby };
