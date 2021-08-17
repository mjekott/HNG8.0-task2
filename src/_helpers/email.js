const nodemailer = require('nodemailer');
require('dotenv');

exports.sendMail = async (option) => {
  //Create a transporter object
  let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${option.email}<ekottmfon@gmail.com>`,
    to: `ekottmfon "gmail.com`,
    subject: `Resume contact- ${option.name}`,
    html: ` ${option.message}`,
  };

  await transport.sendMail(mailOptions);
};
