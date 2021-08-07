require('dotenv').config()
const mongoose = require("mongoose");
// import mongoose from 'mongoose';
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_CONNECTION_NAME}:${process.env.DB_CONNECTION_PASS}@cluster0.mz9zv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then((data) => console.log("connected to Data base successfully.........."))
  .catch((error) => console.log("Not Connected"));
