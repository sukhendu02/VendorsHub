const express = require('express')
const app = express()
const cors = require("cors")

// const router = require("./Routes/userRoutes")
const userRoutes = require("./Routes/userRoutes")

// app.use('/api/auth', );
app.use(cors())
app.use(express.json())

app.use('/api/auth', userRoutes)

const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODBURL;

const { EFAULT } = require("constants");
const { error, Console } = require("console");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("successful"))
  .catch((err) => console.log(err));




//routing path
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });