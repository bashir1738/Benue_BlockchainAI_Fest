const { securityLogger } = require('./logger');


function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    securityLogger(req, 'UNAUTHORIZED_ACCESS', 'No Bearer token provided');
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Hardening: ensure the token has basic expected payload
    if (!decoded.id && !decoded.email) {
      securityLogger(req, 'INVALID_TOKEN_PAYLOAD', 'Token decoded but missing ID/Email');
      throw new Error('Invalid token payload');
    }

    req.admin = decoded;
    next();
  } catch (err) {
    securityLogger(req, 'AUTH_FAILURE', `Token verification failed: ${err.message}`);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.',
    });
  }
}

module.exports = authMiddleware;
