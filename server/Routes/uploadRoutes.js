const express = require('express');
const router = express.Router();
// const { getPresignedUrl } = require('../controllers/uploadController');
const {deleteFromS3} = require("../Controllers/uploadControllers")
const { getPresignedUrl } = require('../Controllers/uploadControllers')



router.post('/presigned-url', getPresignedUrl);
// DELETE: delete from S3
router.delete('/delete-file', deleteFromS3);

module.exports = router;
