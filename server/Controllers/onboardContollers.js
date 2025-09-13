

// const { useAuth } = require('../../client/src/Context/AuthContext');
const NonRegisteredVen = require('../Modals/NonRegisteredVen')
const registeredVen = require('../Modals/RegisteredVen')
const User = require('../Modals/User')
// const RegisteredVen = require('../Modals/RegisteredVen')
const { v4: uuidv4 } = require('uuid');
const s3 = require("../Config/s3")

const onboardReg =async(req,res)=>{


    try {
         
       const UserData = await User.findById(req.user.id).select("-password");
     
        
    const userEmail = UserData.email
        
        const {firstname,lastname,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc,documents }=req.body
        // console.log( {firstname,lastname,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc })
        console.log(firstname,lastname);

        if(!firstname||!storeName||!storeURL||!phone||!B_name|| !add_line1||!add_line2||!city||!pincode||!state||!gstin){
            // console.log("Hi i ran 2")
            
            return res.status(400).json({message:"Please fill all the details."})
        }
       

        
      // Optional: Validate documents
    if (!Array.isArray(documents) || documents.length === 0) {
      return res.status(400).json({ message: 'Please upload at least one document.' });
    }


     
        //   Check exsisting form 
        const VendorExist = await registeredVen.findOne({email:userEmail})
        
      
        if(VendorExist){

        
        if(VendorExist.applicationStatus=="Approved"){

            return res.status(200).json({ message: 'Your application is already approved.' });
        }
        if(VendorExist.applicationStatus=="InReview"){

            return res.status(202).json({ message: 'Your application is still IN REVIEW' });
        }
        if(VendorExist.applicationStatus=="Rejected"){

            return res.status(202).json({ message: 'Your application is rejected. Please contact support.  ' });
        }
        const at= VendorExist.attempt

        // Update the details if the already present!
        const updatedVendor = await registeredVen.findOneAndUpdate(VendorExist._id,
         { firstname, lastname, B_name, storeName, storeURL, phone, extLinks, add_line1, add_line2, city, pincode,
                state,gstin, pan,bank_ac_number,ifsc,applicationStatus:"InReview",attempt:at+1,documents },
                { new: true }  
        )
           
        if (!updatedVendor) {
            return res.status(404).json({ message: 'User not found' });
          }
        return res.status(200).json({ message: 'Vendor details updated successfully' })
                    
        
    }
    // console.log(hi)
       



    // 
       
        const newVendor = new registeredVen({
            email:userEmail, firstname,lastname,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc,documents,

        })
        // console.log("Hi i ran 4")
          await newVendor.save();
          return res.status(201).json({ message: 'Form Sumbitted' });

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" });
        
    }
    
    
}




const onboardNonReg= async (req,res)=>{
  try {
    console.log("hii")

    const UserData = await User.findById(req.user.id).select("-password");
     
        
    const userEmail = UserData.email
    // console.log(userEmail)

    // console.log("Hi I ran")
    const {firstname,lastname,name_doc,storeName, storeURL,phone,extLinks,
        add_line1,add_line2,city,pincode,state,bank_name,pan,bank_ac_number,ifsc,enrollmentID }=req.body;
         
        console.log(firstname,lastname)

        if(!firstname || !lastname  || !storeName || !storeURL ||!name_doc||
            !phone || !extLinks || !add_line1 || !add_line2 || !city
            || !pincode || !state || !bank_name || !pan || !bank_ac_number
            || !ifsc || !enrollmentID){
                return res.status(400).json({ message: "Please fill all the fields" });
        }

        
         //   Check exsisting form 
         const VendorExist = await NonRegisteredVen.findOne({email:userEmail})
        
      
         if(VendorExist){
 
         
         if(VendorExist.applicationStatus=="Approved"){
 
             return res.status(200).json({ message: 'Your application is already approved.' });
         }
         if(VendorExist.applicationStatus=="InReview"){
 
             return res.status(202).json({ message: 'Your application is still IN REVIEW' });
         }
         if(VendorExist.applicationStatus=="Rejected"){
 
             return res.status(202).json({ message: 'Your application is rejected. Please contact support.  ' });
         }
         const at= VendorExist.attempt

         // Update the details if the already present!
         const updatedVendor = await NonRegisteredVen.findOneAndUpdate(VendorExist._id,
          { firstname,lastname,name_doc,storeName, storeURL,phone,extLinks,
            add_line1,add_line2,city,pincode,state,bank_name,pan,bank_ac_number,ifsc,
                 applicationStatus:"InReview",attempt:at+1,enrollmentID },
                 { new: true }  
         )
            
         if (!updatedVendor) {
             return res.status(404).json({ message: 'User not found' });
           }
         return res.status(200).json({ message: 'Vendor details updated successfully' })
                     
         
        }
        // console.log("hi i ran 2")
        const newVendor = new NonRegisteredVen({
            email:userEmail, firstname,lastname,name_doc,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,bank_name,pan,bank_ac_number,ifsc ,enrollmentID
            
        })
       
          await newVendor.save();
          return res.status(201).json({ message: 'Form Sumbitted' });

  } catch (error) {
    // console.log(error)
    res.status(500).json({ message: "Server error" });
        
  }
  
}
const getVendorStatus = async (req, res) => {
    try {
        // console.log(req.user.email)
        const UserData = await User.findById(req.user.id).select("-password");
        const userEmail = UserData.email
        // console.log(userEmail)
        
        let vendor = await registeredVen.findOne({ email: userEmail });
        // console.log(vendor)
        // console.log(vendor)
        if (!vendor) {
             vendor = await NonRegisteredVen.findOne({email:userEmail})
        }
        if (!vendor) return res.status(404).json({ status: "Pending" });
        

        
        return res.status(200).json({ status: vendor.applicationStatus });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};
const getVendorappData = async (req, res) => {
    try {
        // console.log(req.user.email)
        const UserData = await User.findById(req.user.id).select("-password");
        const userEmail = UserData.email
        
        let vendor = await registeredVen.findOne({ email: userEmail });
        if (!vendor) {
            vendor = await NonRegisteredVen.findOne({email:userEmail})
          }
        if (!vendor) {
            // If vendor not found, assume pending status
            return res.status(404).json({ status: "Pending", vendor: null });
          }
          // Send full vendor data along with application status
    return res.status(200).json({
        status: vendor.applicationStatus,
        vendor: vendor,
      });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};
module.exports={onboardReg,onboardNonReg,getVendorStatus,getVendorappData}