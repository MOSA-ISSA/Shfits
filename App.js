const express = require("express");
const mongoose = require("mongoose");
const Routs = require("./api/rout/Routs");

const app = express();
app.use(express.json());

const mongooseLink = "mongodb+srv://MOSA:ma741369@cluster0.fu7wkok.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
  console.log("server start");
});

//  http://localhost:2999 //

// process.on('warning', (warning) => {
//     console.log("????????????????");
//     console.log(warning.stack);
// });


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get("/app", (req, res) => {
    res.status(200).json({
      message: "work",
      test: "done",
    });
  }
);

app.post("/test", (req, res) => {
  try{
    res.status(200).json(req.body)
    // console.log(req.body);
  }catch(e){
    res.status(500).json({message:e.message})
    console.log(e.message);
  }
})
//example

app.use("/", Routs);

module.exports=app;