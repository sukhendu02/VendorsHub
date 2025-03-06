const express = require('express')
const app = express()



// const { signup, signin, logout ,userProfile} =require('../Controllers/authControllers');
const {onboardReg,onboardNonReg} = require('../Controllers/onboardContollers')
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.post('/onboard/registered',onboardReg );
router.post('/onboard/non-registered',onboardNonReg );
// router.post('/signin', signin);
// router.post('/logout',authMiddleware, logout);

// router.get('/profile',authMiddleware,userProfile)



module.exports = router;
