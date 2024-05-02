const express= require("express");
const connectdb = require("./db/db");
const  route  = require("./routes/routes");
const cors= require("cors")
const app= express();
app.use(express.json());
const corsoption={
    "origin": "http://localhost:5173",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    
    "optionsSuccessStatus": 204
  }
  app.use(cors(corsoption))

app.use("/Api",route)

connectdb().then(()=>{
    app.listen(4000,()=>{
        console.log("server is connected");
    })
})


