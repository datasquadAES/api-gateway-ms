const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

function signToken(payload, options = {}) {
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = {
  verifyToken,
  signToken
};