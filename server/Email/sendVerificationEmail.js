const axios = require('axios');
require('dotenv').config();

const sendVerificationEmail = async (newUser, rawToken,isResend=false) => {
  try {

     const verifyEmail = `http://localhost:5173/verify-email?token=${rawToken}&id=${newUser._id}`;
    
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
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
        // subject: 'Thank you for contacting us!',
        // htmlContent: `
         
        //   <p>${resetLink}</p>
        //   <p>Thank you for submitting your details. We’ll be in touch shortly.</p>
        //   <p>- Your Company</p>
        // `,
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
