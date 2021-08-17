const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  const { email, name, message } = req.body;
  if (!email || !name || !message) {
    return res
      .status(400)
      .json({ success: false, error: ' 🔥  All Fields required  🔥 ' });
  }
  return res
    .status(200)
    .json({ status: true, message: 'Message Sent Succesffully' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
