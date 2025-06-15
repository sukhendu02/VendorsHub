const multer = require('multer');

const storage = multer.memoryStorage(); // Store in memory for S3 upload
const upload = multer({ storage });

module.exports = upload;
