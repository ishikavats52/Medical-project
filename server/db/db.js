const mongoose=require("mongoose");
const uri="mongodb+srv://ayushchauhan22115:UZnIX2n3e5mys5Lg@cluster0.bgbir4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    const connectdb= async ()=>{
        try {
       await mongoose.connect(uri);
       console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
   
 
 }

module.exports= connectdb;