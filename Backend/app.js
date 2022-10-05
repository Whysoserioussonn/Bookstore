const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json()); // specify it before your routes, sequence matters
app.use(cors());
app.use("/books", router); // localhost:5000/books



// added for port
require('dotenv').config()
// Identify our port
const port = process.env.PORT


// used in the beginning to test mongo to website 
// app.use("/", (req, res, next) => {
//     res.send("this is a working app")
// })

mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', () =>
{
    console.log('Connected to MongoDB')
})

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

