const jwt = require("express-jwt");
const keys = require('../../keys')

const getTokenFromHeader = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

module.exports = jwt({
  secret: keys.SESSION_SECRET,
  userProperty: "tokenData",
  algorithms: ['HS256'],
  getToken: getTokenFromHeader,
});
