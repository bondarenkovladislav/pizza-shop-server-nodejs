const jwt = require("jsonwebtoken");
const keys = require("../../keys");

exports.generateToken = (user) => {
  const data = {
    _id: user._id,
    email: user.email,
  };

  return jwt.sign({ data }, keys.SESSION_SECRET, {
    expiresIn: keys.SESSION_EXPIRATION || "6h",
  });
};
