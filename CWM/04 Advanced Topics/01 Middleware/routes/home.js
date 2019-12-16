const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('HELLO WORLD');
  res.render('index', { title: 'My Express app', message: 'Hello You' });
});

module.exports = router;
