const express = require('express')
const app = express()
const { createRateLimiter } = require('../Middleware/rateLimiter');
// const { resendVerification } = require('../Controllers/authControllers');


// const user = require('../Modals/User')

// const signup = require("../Controllers/authControllers.js")
const { signup, signin, logout ,userProfile,forgotPass,resetPass,verifyEmail,resendVerification,queryForm,} =require('../Controllers/authControllers');
const authMiddleware = require('../Middleware/authMiddleware');
const { default: rateLimit } = require('express-rate-limit');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.post('/logout',authMiddleware, logout);

// Verify link (GET, so user clicking email link works)
router.post("/verify-email", verifyEmail);

router.get('/profile',authMiddleware,userProfile)
router.post('/forgot-password',forgotPass);
router.post('/reset-password/:token', resetPass);

// Resend (protect with rate limiter)
const resendLimiter = createRateLimiter({ windowMs: 60_000, max: 3, message: "Too many resends, try later." });
router.post("/resend-verification", resendLimiter,resendVerification);

module.exports = router;
