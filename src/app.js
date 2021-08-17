const express = require('express');
const app = express();
const { valid, contactValidator } = require('./_helpers/validation');
const { sendMail } = require('./_helpers/email');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', contactValidator, valid, async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendMail({ name, email, message });
  } catch (err) {
    console.log(err);
  }
  return res
    .status(200)
    .json({ status: true, message: 'Message Sent Succesffully' });
});

module.exports = app;
