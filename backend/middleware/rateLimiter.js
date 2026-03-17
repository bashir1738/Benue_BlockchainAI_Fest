const rateLimit = require('express-rate-limit');
const { securityLogger } = require('./logger');


const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.',
  },
  handler: (req, res, next, options) => {
    securityLogger(req, 'RATE_LIMIT_GLOBAL', 'Global rate limit exceeded');
    res.status(options.statusCode).send(options.message);
  }
});


const registrationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many registration attempts. Please try again in 15 minutes.',
  },
  handler: (req, res, next, options) => {
    securityLogger(req, 'RATE_LIMIT_REGISTRATION', `Registration limit hit for ${req.body.email || req.body.corporateEmail || 'unknown'}`);
    res.status(options.statusCode).send(options.message);
  }
});


const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many login attempts. Please try again in 15 minutes.',
  },
  handler: (req, res, next, options) => {
    securityLogger(req, 'RATE_LIMIT_LOGIN', `Admin login failed/limit hit for ${req.body.email || 'unknown'}`);
    res.status(options.statusCode).send(options.message);
  }
});

module.exports = { globalLimiter, registrationLimiter, adminLoginLimiter };
