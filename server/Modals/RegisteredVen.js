
const mongoose = require('mongoose')
const express = require("express");


const registeredVenSchema = new mongoose.Schema({
   
    firstname: String,
    lastname: String,
    storeName:String,
    storeURL:String,
    phone:Number,
    email:String,
    B_name:String,
    extLinks:String,
    add_line1:String,
    add_line2:String,
    city:String,
    pincode:String,
    state:String,
    gstin:String,
    pan:String,
    bank_ac_number:String,
    ifsc:String,
   
    
    Date:{ type:Date,
        default:Date.now},
        applicationStatus: {
            type: String,
            enum: ["Pending","InReview" ,"Approved", "Rejected"],
            default: "InReview", 
          },
          attempt:{
            type:Number,
            default:1,
          }

    

})
const registeredVen = mongoose.model('registeredVen', registeredVenSchema);
module.exports = registeredVen;