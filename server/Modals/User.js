const { Schema, model } = require("mongoose");
const normaluserschema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },


}, { timestamps: true })
const normal_user = new model("normal_user", normaluserschema);

const doctor_schema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    degreecode: {
        type: String,
        required: true
    },
    certificate: {
        type: Buffer,
        required: true
    },


    isdoctor: {
        type: String,
        default: 1,
        required: true

    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: {
          type: String,
          default: 'Point',
        },
        coordinates: {
          type: [Number],
        //   index: '2dsphere',
        },
      },


}, { timestamps: true })
doctor_schema.index({ 'location': '2dsphere' });
const doctor = new model("doctor_data", doctor_schema);
module.exports = { normal_user, doctor };