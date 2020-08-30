const express = require('express');
const router = express.Router();
const User = require('../src/models/User')

router.post('/register', async (req, res, next) => {
  const email = req.body.email
  const existedUser = User.findById()
});

module.exports = router;
