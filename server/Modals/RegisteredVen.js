
const mongoose = require('mongoose')
const express = require("express");


const registeredVenSchema = new mongoose.Schema({
   
    firstName: String,
    lastName: String,
    storeName:String,
    storeURL:String,
    phone:Number,
    extLinks:String,
    B_name:String,
    add_line1:String,
    add_linl2:String,
    city:String,
    pincode:String,
    state:String,
    gstn:String,
    pan:String,
    bank_ac_Number:String,
    ifsc:String,
    status:String,
    
    Date:{ type:Date,
        default:Date.now},

    

})
const registeredVen = mongoose.model('registeredVen', registeredVenSchema);
module.exports = registeredVen;