const express = require('express')
const app = express()



// const { signup, signin, logout ,userProfile} =require('../Controllers/authControllers');
const {onboardReg,onboardNReg} = require('../Controllers/onboardContollers')
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.post('/onboard/registerd',onboardReg );
// router.post('/signin', signin);
// router.post('/logout',authMiddleware, logout);

// router.get('/profile',authMiddleware,userProfile)



module.exports = router;
