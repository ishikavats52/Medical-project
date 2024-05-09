
const{Schema,model,Types}= require("mongoose")

const ratingmodel= new Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },

    doc_id:{
        required:true,
        type:  String,
    },

    rating:{
        required:true,

type:Number
    },
    review:{
        required:true,
type:String
    }
},{timestamps: true});

const rate= new model("doc_rating", ratingmodel);
module.exports=rate;

