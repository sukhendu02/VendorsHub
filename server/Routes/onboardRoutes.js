const express = require('express')
const app = express()



// const { signup, signin, logout ,userProfile} =require('../Controllers/authControllers');
const {onboardReg,onboardNonReg,getVendorStatus,getVendorappData} = require('../Controllers/onboardContollers')
const {getPresignedUrl} =require('../Controllers/uploadControllers')
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.get("/vendor/applicationstatus", authMiddleware, getVendorStatus);
router.get("/vendor/appdata", authMiddleware, getVendorappData);

router.post('/onboard/registered',authMiddleware,onboardReg );
router.post('/onboard/non-registered',authMiddleware,onboardNonReg );

router.post('/presigned-url', getPresignedUrl);


module.exports = router;
