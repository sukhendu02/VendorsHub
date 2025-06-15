// const AWS = require('aws-sdk');
// const { v4: uuid } = require('uuid');

// console.log(process.env.AWS_S3_BUCKET)
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });
// const s3 = new AWS.S3();

// const generatePresignedUrl = async (fileName, fileType) => {
//   const key = `documents/${uuid()}-${fileName}`;

//   const params = {
//     Bucket: process.env.AWS_S3_BUCKET,
//     Key: key,
//     Expires: 60,
//     ContentType: fileType,
//   };

//   const url = await s3.getSignedUrlPromise('putObject', params);
//   return { url, key };
// };

// module.exports = { generatePresignedUrl };
// utils/s3.js
require('dotenv').config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuid } = require('uuid');

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  Bucket: process.env.AWS_S3_BUCKET,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const generatePresignedUrl = async (fileName, fileType) => {
  const key = `VendorDocs/${uuid()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    ContentType: fileType,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 60 }); // 60 sec expiry

  return { url, key };
};

module.exports = { generatePresignedUrl };
