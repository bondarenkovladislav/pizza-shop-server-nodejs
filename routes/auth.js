const express = require("express");
const router = express.Router();
const User = require("../src/models/User");
const { registerValidators } = require("../src/utils/validators");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

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
    res.status(201).json({data: user})
  } catch (e) {
    res.status(503).json({ error: e.message });
  }
});

module.exports = router;
