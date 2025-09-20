const express = require('express')
const bcrypt = require('bcryptjs');
const jwt  = require("jsonwebtoken");
var passwordValidator = require('password-validator');
var schema = new passwordValidator();
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const User = require("../Modals/User")
const sendEmail = require('../Email/brevoEmail')

const sendVerificationEmail = require('../Email/sendVerificationEmail');
// const { queryForm } = require('../Controllers/authControllers');
// const QueryForm = require('../Modals/QueryForm');

const crypto = require('crypto');




const cookieParser = require('cookie-parser');

const hashToken = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};


const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
       
        // Backend Validation
        if(!username || !email || !password){
            return res.status(400).json({message:"Please fill all the details."})
        }
       
        schema
        .is().min(8)                                    // Minimum length 8
         .is().max(100)                                  // Maximum length 100
         .has().uppercase()                              // Must have uppercase letters
         .has().lowercase()                              // Must have lowercase letters
         .has().digits(1)     
          .has().symbols()                           // Must have at least 2 digits
         .has().not().spaces()                           // Should not have spaces
         .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
         // console.log(schema.validate(password));
         if(schema.validate(password)==false){
             return res.status(400).json({message:"Invalid Password"})
         }

         
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }
     
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
     
        
        // Create user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        
        // Generate JWT Token
        const token = jwt.sign({id: newUser._id},process.env.JWT_USER_KEY,{expiresIn:'24h'})
        
        
        
        // Generate verification token (raw + hashed saved)
        const rawToken = crypto.randomBytes(32).toString("hex");
        newUser.emailVerificationToken = hashToken(rawToken);
        newUser.emailVerificationExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
        
        // console.log(newUser);
        await newUser.save();
    const verifyEmail = await sendVerificationEmail(newUser, rawToken, false);
    // console.log("Sending verification email...");
    const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${rawToken}&id=${newUser._id}`;
  
    // console.log(verifyUrl)
    
    // console.log("email sent");
        
 

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
       
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


// SIGN IN ROUTE    

const signin = async(req,res)=>{

    const { email, password } = req.body;
try{

    // FIELDS
    if(!email || !password){
        return res.status(400).json({message:"Please fill all the required details"})
    }


    // Find user 
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message: "User not found! Please Sign Up first."})
    }
    // console.log(user)


    // Match password
    const matchPass=await bcrypt.compare(password,user.password);
    if(!matchPass){
        return res.status(400).json({message:'Invalid Credentials'})

    }
    // console.log("Password Matched")

    // Enforce email verification
    if (!user.emailVerified) {
      return res.status(403).json({
        message: "Please verify your email before logging in.",
        canResend: true // helpful for frontend
      });
    }

    // Generate jwt tokens 
    const token = jwt.sign({id:user._id},process.env.JWT_USER_KEY,{expiresIn:'24h'})
    // console.log(token)

    

    res.cookie("jwt",token,{
        expires:new Date(Date.now()+604800000),
        httpOnly:true,
        // loggedin:true
    }

);
//    console.log("before the success msg")
    res.status(200).json({message:'Signin Successful', user:{id:user._id,email:user.email}})

}catch(error){
    res.status(500).json({message:"Internal Server Error"})
}
}


/**
 * Verify email route (consumes token)
 * GET /api/auth/verify-email?token=<raw>&id=<userId>
 */
const verifyEmail = async (req, res) => {
  try {
      const { token, id } = req.body;
    //   console.log(hi)
    if (!token || !id) {
      return res.status(400).json({ success: false, message: "Invalid link" });
    }

  
    const hashed = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      _id: id,
      emailVerificationToken: hashed,
      emailVerificationExpires: { $gt: Date.now() }
    });
// console.log(user)
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired token" });
    }

    // console.log("hi")
    user.emailVerified = true;
    user.emailVerifiedAt = new Date();
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    

    return res.json({ success: true, message: "Email verified successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const resendVerification = async (req, res) => {
  try {
    // console.log("Resend verification requested");
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // console.log(email)
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.emailVerified) {
      return res.status(400).json({ message: "Email is already verified" });
    }

    // Generate new token and overwrite existing one
    const rawToken = crypto.randomBytes(32).toString("hex");
    user.emailVerificationToken = hashToken(rawToken);
    user.emailVerificationExpires = Date.now() + 30 * 60 * 1000;
    await user.save();

    // Send as 'resend' (isResend=true)
    
    const verifyEmail = `${process.env.FRONTEND_DOMAIN}/verify-email?token=${rawToken}&id=${user._id}`;
   console.log(verifyEmail)
    await sendVerificationEmail(user, rawToken, true);
    
    return res.json({ message: "Verification email resent" });
  } catch (err) {
    // console.error("resendVerification error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


const userProfile = async (req,res)=>{

    try {
        // console.log("hi 1")
        // console.log(req.user)
        const user = await User.findById(req.user.id).select("-password"); // Exclude password
        // console.log("hi 2")
        if (!user) return res.status(404).json({ message: "User not found" });
        
        
        res.json(user);
        
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        
    }

}

const logout =async(req,res)=>{
    try {
        // console.log("hi from logout")
        // console.log(req.user)
        // res.clear('jwt',{
        //     httpOnly: true,
        //     // secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
        //     secure:false,
        //     sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'None', // 'strict' in production, 'None' in development
        // })


          //          OR JUST CLEAR COOKIES           //
        //   console.log(req.cookies.jwt)
          res.clearCookie("jwt",{
            // expires:new Date(Date.now()+604800000),
            // expires: new Date(0),
            httpOnly:true,
            // loggedin:true
        });
        //   console.log(req.cookies.jwt)
          
        // console.log("After logout")
        res.status(200).json({message:"Logout Sucess"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }



}

const forgotPass = async(req,res)=>{
    try {
        const { email } = req.body;
        
        
        if(!email){
            return res.status(400).json({message:"Please fill the required details"})
        }
        const imuser = await User.findOne({ email });
        // console.log(imuser)
        if (!imuser) return res.status(404).json({ message: "User not found" });

         const token = jwt.sign(
    { id: imuser._id },
    process.env.JWT_USER_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  const resetLink = `${process.env.DOMAINNAME}/reset-password/${token}`;

// console.log(resetLink)
const resetEmail = await sendEmail(email, resetLink);
// console.log(resetEmail)

res.status(200).json({ message: 'Password Reset Link has been sent to Email. (expires in 10 min)' });


    } catch (error) {
// console.log(error)
         res.status(500).json({message:"Internal Server Error"})
        
    }
   


}


// 2. Reset Password
 const resetPass = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

//   console.log(token,newPassword)

try {
   // Backend Validation
        if( !newPassword){
            return res.status(400).json({message:"Please fill all the details."})
        }

    const decoded = jwt.verify(token, process.env.JWT_USER_KEY);
    // console.log(decoded)
    const imuser = await User.findById(decoded.id);
    if (!imuser) return res.status(404).json({ message: 'User not found' });
 
        schema
        .is().min(8)                                    // Minimum length 8
         .is().max(100)                                  // Maximum length 100
         .has().uppercase()                              // Must have uppercase letters
         .has().lowercase()                              // Must have lowercase letters
         .has().digits(1)        
         .has().symbols()                        // Must have at least 2 digits
         .has().not().spaces()                           // Should not have spaces
         .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
         // console.log(schema.validate(password));
         if(schema.validate(newPassword)==false){
             return res.status(400).json({message:"Invalid Password"})
         }

      // Hash and save password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    imuser.password = hashedPassword;
    await imuser.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
     if (error.name === 'TokenExpiredError') {
      return res.status(400).json({ message: 'Reset link has expired' });
    }
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};



module.exports = { signup, signin ,userProfile,logout,forgotPass,resetPass,verifyEmail,resendVerification};