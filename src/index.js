const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
mongoose.set("strictQuery", true);
const route = require('../src/routes/route.js')



app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://amanmahto:anuragf45@amanscluster.os0m9fw.mongodb.net/studentRegistration?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function(){
     console.log("Express app running on port " + (process.env.PORT || 3000));
})