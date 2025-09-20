const axios = require('axios');
require('dotenv').config();

const sendEmail = async (toEmail, resetLink) => {
  try {
    await axios.post(
      `${process.env.BREVO_API_URL}`,
      {
        sender: {
          name: 'Team Aabhaar',
          email: process.env.SUPPORTEMAIL,
        },
        to: [
          {
            email: toEmail,
           
          },
        ],
         'templateId':1,
         'params': { 'resetLink': resetLink, }

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
