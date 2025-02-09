const express = require("express");
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const authMiddleware = (req, res, next) => {

    // console.log("hi I am trigged")
    // console.log(req.cookies.jwt)
    
    const token = req.cookies.jwt || req.headers['authorization']?.split(' ')[1];;
    console.log(token)

    
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_USER_KEY);
        req.user = decoded; // Attach user data to request
        console.log(req.user)
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;
