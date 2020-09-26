const express = require('express');

const router = express.Router();

// GET / ¶ó¿ìÅÍ
router.get('/', (req, res) => {
  res.send('Hello, Express');
});

module.exports = router;
