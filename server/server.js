const express= require("express");
const connectdb = require("./db/db");
const  route  = require("./routes/routes");
const app= express();
app.use(express.json());
app.use("/Api",route)
connectdb().then(()=>{
    app.listen(4000,()=>{
        console.log("server is connected");
    })
})


