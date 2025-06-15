const { generatePresignedUrl } = require('../Config/s3')
const { DeleteObjectCommand } = require('@aws-sdk/client-s3');

require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});


const getPresignedUrl = async (req, res, next) => {
  try {
    const { fileName, fileType } = req.body;
    // console.log(fileName,fileType)
    if (!fileName || !fileType) {
      return res.status(400).json({ message: 'Missing fileName or fileType' });
    }

    const { url, key } = await generatePresignedUrl(fileName, fileType);
   
    res.status(200).json({ url, key });
    // console.log("added :",key)
  } catch (err) {
    console.log(err)
    next(err);
  }
};

const deleteFromS3 = async (req, res) => {
  const { key } = req.body;
  // console.log("Received delete key:", req.body.key);


  if (!key) {
    
    return res.status(400).json({ error: 'S3 key is required' });
}


  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
  };
  // console.log(params)

  try {
    await s3.send(new DeleteObjectCommand(params));
    return res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('S3 Delete Error:', error);
    return res.status(500).json({ error: 'Failed to delete document from S3' });
  }
};

module.exports = {
 getPresignedUrl,
  deleteFromS3
};
