const express = require('express')
const app = express()
const cors = require("cors")

const cookieParser = require("cookie-parser"); 
app.use(cookieParser())


const port = process.env.PORT || 3000;


// const router = require("./Routes/userRoutes")
const userRoutes = require("./Routes/userRoutes")
const onboardRoutes = require("./Routes/onboardRoutes")
const uploadRoutes = require("./Routes/uploadRoutes")
const commonRoutes = require("./Routes/commonRoutes")
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
    methods: ['GET', 'POST','DELETE'],
    credentials: true // Allow cookies
}));

app.use(express.json())


app.use('/api/upload', uploadRoutes);

app.use('/api/auth', userRoutes,onboardRoutes)

app.use('/api/common', require('./Routes/commonRoutes'));
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


// const { MongoClient } = require("mongodb"); ❌ don't use unless you need low-level driver

// const { MongoClient, ServerApiVersion } = require("mongodb");
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
// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'VendorHub API is running',
    timestamp: new Date().toISOString(),
    port: port
  });
});

  app.get('/check-cookies', (req, res) => {
    console.log(req.cookies); // Check received cookies
    res.json(req.cookies);
});



import path from "path";

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

  // Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${port}`);
  });

  module.exports = app;