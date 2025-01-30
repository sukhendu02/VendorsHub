const express = require('express')
const app = express()


const user = require('../Modals/User')

// const signup = require("../Controllers/authControllers.js")
const { signup, signin, logout } =require('../Controllers/authControllers')
const router = express.Router();

router.post('/signup', signup);
// router.post('/signin', signin);
// router.post('/logout', logout);

module.exports = router;
