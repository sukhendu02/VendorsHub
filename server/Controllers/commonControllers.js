const express = require('express');
const app = express();
const QueryForm = require('../Modals/QueryForm');
const router = express.Router();
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const cookieParser = require('cookie-parser');



const queryForm = async (req, res) => {
    try {
        const { fullname, email, subject, query } = req.body;
        // console.log(req.body)
        // Validate input
        if (!fullname || !email || !subject || !query) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        // Create a new query form entry
        const newQuery = new QueryForm({
            fullname,
            email,
            subject,
            query
        });
        // Save the query form to the database
       
        const savedQuery = await newQuery.save();
        // console.log("Query saved:", savedQuery);

      
        // const savedQuery = await QueryForm.create(newQuery);

        // Here you can handle the query form submission logic (e.g., save to database, send email, etc.)
        // For now, we'll just return a success message
        res.status(200).json({ message: "Query submitted successfully" });
    } catch (error) {
        console.error("Error submitting query:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { queryForm };