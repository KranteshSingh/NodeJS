const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
  //res.send('HELLO WORLD');
  res.render('index', { title: 'My Express app', message: 'Hello You' });
});

moduke.exports = router;
