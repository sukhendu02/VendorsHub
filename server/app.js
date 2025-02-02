const express = require('express')
const app = express()
const cors = require("cors")

const cookieParser = require("cookie-parser"); 
app.use(cookieParser())

// const router = require("./Routes/userRoutes")
const userRoutes = require("./Routes/userRoutes")

// app.use('/api/auth', );

// const cors = require('cors');
// app.use(cors())
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5000']; // Add all allowed frontend URLs

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true // Allow cookies
}));

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


  app.get('/check-cookies', (req, res) => {
    console.log(req.cookies); // Check received cookies
    res.json(req.cookies);
});


  // Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });