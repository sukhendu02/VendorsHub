const express = require('express')
const app = express()


// const user = require('../Modals/User')

// const signup = require("../Controllers/authControllers.js")
const { signup, signin, logout ,userProfile} =require('../Controllers/authControllers');
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout',authMiddleware, logout);

router.get('/profile',authMiddleware,userProfile)



module.exports = router;
