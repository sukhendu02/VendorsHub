const express = require('express')
const app = express()


const user = require('../Modals/User')


import { signup, signin, logout } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);


