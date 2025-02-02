const User = require("../Modals/User")
const bcrypt = require('bcryptjs');
const jwt  = require("jsonwebtoken");
var passwordValidator = require('password-validator');
var schema = new passwordValidator();
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})


const cookieParser = require('cookie-parser');


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
         .has().digits(1)                                // Must have at least 2 digits
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


    // Match password
    const matchPass=await bcrypt.compare(password,user.password);
    if(!matchPass){
        return res.status(400).json({message:'Invalid Credentials'})

    }

    // Generate jwt tokens 
    const token = jwt.sign({id:user._id},process.env.JWT_USER_KEY,{expiresIn:'24h'})
    // console.log(token)

      // Send token in httpOnly cookie (more secure) to browser
    //   res.cookie("jwt", token, {
    //     httpOnly: true,
    //     secure: false, // Set to true in production
    //     sameSite: "Lax", // "None" requires HTTPS
    //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    //     maxAge: 24 * 60 * 60 * 1000 // 1 day
    // });
    

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
        console.log("hi from logout")
        // console.log(req.user)
        // res.clear('jwt',{
        //     httpOnly: true,
        //     // secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
        //     secure:false,
        //     sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'None', // 'strict' in production, 'None' in development
        // })


          //          OR JUST CLEAR COOKIES           //
          console.log(req.cookies.jwt)
          res.clearCookie("jwt",{
            // expires:new Date(Date.now()+604800000),
            expires: new Date(0),
            httpOnly:true,
            // loggedin:true
        });
          console.log(req.cookies.jwt)
          
        console.log("After logout")
        res.status(200).json({message:"Logout Sucess"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = { signup, signin ,userProfile,logout};