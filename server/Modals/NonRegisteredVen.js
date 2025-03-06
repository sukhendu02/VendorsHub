
const mongoose = require('mongoose')
const express = require("express");


const NonRegisteredVenSchema = new mongoose.Schema({
   
    firstname: String,
    lastname: String,
    storeName:String,
    storeURL:String,
    phone:Number,
    email:String,
    name_doc:String,
    extLinks:String,
    add_line1:String,
    add_line2:String,
    city:String,
    pincode:String,
    state:String,
    bank_name:String,
    pan:String,
    bank_ac_number:String,
    ifsc:String,
   
    
    Date:{ type:Date,
        default:Date.now},
    applicationStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
        },

    

})
const NonRegisteredVen = mongoose.model('NonRegisteredVen', NonRegisteredVenSchema);
module.exports = NonRegisteredVen;