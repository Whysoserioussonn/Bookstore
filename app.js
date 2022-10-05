const express = require("express");
const mongoose = require("mongoose");

const app = express();

// added for port
require('dotenv').config()
// Identify our port
const port = process.env.PORT


// Middlewares
app.use("/", (req, res, next) => {
    res.send("this is  app")
})

mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', () =>
{
    console.log('Connected to MongoDB')
})

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

