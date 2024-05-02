const{Schema,model}= require("require")
const ratingmodel= new Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    docname:{
        required:true,
        type:String
    },
    rating:{
        required:true,
type:String
    }
},{timestaps:true});

const rate= new model("doc_rating", ratingmodel);
