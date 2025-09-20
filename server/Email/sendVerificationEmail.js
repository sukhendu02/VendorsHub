const axios = require('axios');
require('dotenv').config();

const sendVerificationEmail = async (newUser, rawToken,isResend=false) => {
  try {

     const verifyEmail = `${process.env.FRONTEND_DOMAIN}/verify-email?token=${rawToken}&id=${newUser._id}`;
    
    await axios.post(
    `${process.env.BREVO_API_URL}`,
      {
        sender: {
          name: 'Team Aabhaar',
          email: process.env.SUPPORTEMAIL,
        },
        to: [
          {
            email: newUser.email,
           
          },
        ],
         'templateId':8,
         'params': { 'verifyEmail': verifyEmail, }
      
      },
      {
        headers: {
          'api-key': process.env.BREVO_APIKEY,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(`Email successfully sent to ${newUser.email}`);
  } catch (error) {
    console.error(`Email failed to ${newUser.email}:`, error.response?.data || error.message);
  }
};

module.exports = sendVerificationEmail;
