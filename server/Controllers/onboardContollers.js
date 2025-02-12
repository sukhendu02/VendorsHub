

const registeredVen = require('../Modals/RegisteredVen')
const RegisteredVen = require('../Modals/RegisteredVen')

const onboardReg =async(req,res)=>{
    try {

        const {firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstn,pan,bank_ac_Number,ifsc }=req.body
        if(!firstName||!storeName||!storeURL||!phone||!B_name|| !add_line1||!add_line2||!city||!pincode||!state||!gstn||!pan){
            return res.status(400).json({message:"Please fill all the details."})
         
          }
        //   Check exsisting form 
        const Venexist = registeredVen.findOne({"email":firstName})
        if(Venexist){
            // check for the status 
        // if the status is approved, inreview, waiting  do not submit and if availble then only submit

        }

      

          const newVendor = new RegisteredVen({
            firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstn,pan,bank_ac_Number,ifsc 
          })
          await newVendor.save();
          res.status(201).json({ message: 'Form Sumbitted' });

        
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        
    }
    
    
}
const onboardNReg =async (req,res)=>{

    try {

    } catch (error) {
        res.status(500).json({ message: "Server error" });
        
    }

}
module.exports={onboardReg,onboardNReg}