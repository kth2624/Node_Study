const express = require('express');

const router = express.Router();

// GET /user ¶ó¿ìÅÍ
router.get('/', (req, res) => {
  res.send('Hello, User');
});

module.exports = router;
