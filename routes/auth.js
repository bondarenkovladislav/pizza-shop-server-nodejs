const express = require("express");
const router = express.Router();
const User = require("../src/models/User");
const {
  registerValidators,
  loginValidators,
} = require("../src/utils/validators");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const {generateToken} = require('../src/core/AuthService')

router.post("/register", registerValidators, async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const user = new User();
    await user.initUserCart();
    const hashPassword = await bcrypt.hash(password, 10);
    user.email = email;
    user.password = hashPassword;
    await user.save();
    res.status(201).json({ data: user });
  } catch (e) {
    res.status(503).json({ error: e.message });
  }
});

router.post("/login", loginValidators, async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const candidate = await User.findOne({ email });
  if (candidate) {
    const areSame = await bcrypt.compare(password, candidate.password)
    if (areSame) {
      const token = generateToken(candidate)
      res.status(200).json({token: token})
    } else {
      res.status(500).json({ errors: `Login error. Password isn't correct` });
    }
  } else {
    res.status(500).json({ errors: `Login error. User with provided email doesn't exist` });
  }
});

module.exports = router;
