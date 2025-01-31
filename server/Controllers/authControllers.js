const User = require("../Modals/User")
const bcrypt = require('bcryptjs');
const { jwt } = require("jsonwebtoken");
var passwordValidator = require('password-validator');
var schema = new passwordValidator();
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
       
        // Backend Validation
        if(!username || !email || !password){
            return res.status(400).json({message:"Please fill all the details."})
        }
        console.log("validation done")
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
        console.log("here 1")
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("here 2")
        
        // Create user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        
        console.log("here 3")
        // Generate JWT Token
        const token = jwt.sign({id:newuser._id},process.env.JWT_USER_KEY,{expiresIn:'24h'})

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
       
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const signin = async(req,res)=>{

    const { email, password } = req.body;
try{
    if(!email || !password){
        return res.status(400).json({message:"Please fill all the required details"})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message: "User not found"})
    }

    const matchPass=await bcrypt.compare(password,user.password);
    if(!matchPass){
        return res.status(400).json({message:'Invalid Credentials'})

    }

    // Generate jwt tokens 
    const token = jwt.sign({id:user._id},process.env.JWT_USER_KEY,{expiresIn:'24h'})

    res.status(200).json({message:'Signin Successful', token})

}catch(error){
    res.status(500).json({message:"Internal Server Error"})
}
}

module.exports = { signup, signin };