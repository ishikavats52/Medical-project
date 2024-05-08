const { Schema, model } = require("mongoose");
const userlistbydoc = new Schema({
    username: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    reports: {
        type: Buffer,
       
    },
    symptoms: {
        required: true,
        type: String
    },
    // doctor_detail: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "doctor_data",
    //     required: true
    // }
    // ],

    city: {
        type: String,
        required: true
    },
    location: [{
        type: Object,
        required: true
    }],
    reports:{
        type:Buffer
    }

}, { timestamps: true })
const listed_user = new model("medical_details_user", userlistbydoc);
module.exports = listed_user;