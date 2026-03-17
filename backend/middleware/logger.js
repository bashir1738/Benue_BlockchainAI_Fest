const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '..', 'logs');
const adminLogFile = path.join(logDir, 'admin.log');
const securityLogFile = path.join(logDir, 'security.log');


if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}


function adminLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const adminEmail = req.admin ? req.admin.email : 'unknown';
  const method = req.method;
  const url = req.originalUrl;

  const logEntry = `[${timestamp}] ADMIN ACCESS | IP: ${ip} | Admin: ${adminEmail} | ${method} ${url}\n`;

  fs.appendFile(adminLogFile, logEntry, err => {
    if (err) {
      console.error('[Logger] Failed to write admin log:', err.message);
    }
  });

  next();
}

function securityLogger(req, type, message) {
  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const method = req.method;
  const url = req.originalUrl;

  const logEntry = `[${timestamp}] SECURITY | TYPE: ${type} | IP: ${ip} | ${method} ${url} | ${message}\n`;

  fs.appendFile(securityLogFile, logEntry, err => {
    if (err) {
      console.error('[Logger] Failed to write security log:', err.message);
    }
  });
  
  // Also log to console for visibility in dev
  console.warn(logEntry.trim());
}

module.exports = { adminLogger, securityLogger };
