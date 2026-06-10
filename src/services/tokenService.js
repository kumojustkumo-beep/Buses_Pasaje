const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const accessSecret = process.env.JWT_ACCESS_SECRET;
const refreshSecret = process.env.JWT_REFRESH_SECRET;

const signAccess = (user) => jwt.sign({ sub: user.id, email: user.email }, accessSecret, { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN });
const signRefresh = (user, sid) => jwt.sign({ sub: user.id, sid }, refreshSecret, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN });

module.exports = { signAccess, signRefresh, verifyAccess: (t) => jwt.verify(t, accessSecret), verifyRefresh: (t) => jwt.verify(t, refreshSecret) };
