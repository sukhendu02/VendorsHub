const axios = require('axios');
require('dotenv').config();

const sendEmail = async (toEmail, resetLink) => {
  try {
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: 'Team Aabhaar',
          email: process.env.SUPPORTEMAIL,
        },
        to: [
          {
            email: toEmail,
            // name: name,
          },
        ],
         'templateId':1,
         'params': { 'resetLink': resetLink, }
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

    console.log(`Email successfully sent to ${toEmail}`);
  } catch (error) {
    console.error(`Email failed to ${toEmail}:`, error.response?.data || error.message);
  }
};

module.exports = sendEmail;
