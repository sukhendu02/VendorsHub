

const NonRegisteredVen = require('../Modals/NonRegisteredVen')
const registeredVen = require('../Modals/RegisteredVen')
// const RegisteredVen = require('../Modals/RegisteredVen')

const onboardReg =async(req,res)=>{
    try {


        console.log("hi I ran")
        const {firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc }=req.body
        // console.log( {firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc })

        if(!firstName||!storeName||!storeURL||!phone||!B_name|| !add_line1||!add_line2||!city||!pincode||!state||!pan){
            console.log("Hi i ran 2")
            
            return res.status(400).json({message:"Please fill all the details."})
        }
        //   Check exsisting form 
        const Venexist = registeredVen.findOne({"email":firstName})
        if(Venexist){
            // check for the status 
            // if the status is approved, inreview, waiting  do not submit and if availble then only submit
            
        }
        
        
        console.log("Hi i ran 3")
        
       
        const newVendor = new registeredVen({
            firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc 
        })
        console.log("Hi i ran 4")
          await newVendor.save();
          return res.status(201).json({ message: 'Form Sumbitted' });

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" });
        
    }
    
    
}

const onboardNonReg= async (req,res)=>{
  try {
    console.log("Hi I ran")
    const {firstname,lastname,name_doc,storeName, storeURL,phone,extLinks,
        add_line1,add_line2,city,pincode,state,bank_name,pan,bank_ac_number,ifsc}=req.body;
        
        if(!firstname || !lastname  || !storeName || !storeURL ||!name_doc||
            !phone || !extLinks || !add_line1 || !add_line2 || !city
            || !pincode || !state || !bank_name || !pan || !bank_ac_number
            || !ifsc){
                return res.status(400).json({ message: "Please fill all the fields" });
        }
        console.log("hi i ran 2")
        const newVendor = new NonRegisteredVen({
            firstname,lastname,name_doc,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,bank_name,pan,bank_ac_number,ifsc 
        })
       
          await newVendor.save();
          return res.status(201).json({ message: 'Form Sumbitted' });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
        
  }
  
}
module.exports={onboardReg,onboardNonReg}