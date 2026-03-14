const express = require('express');
const { hackathonRegister, getAllHackathonRegistrations, deleteHackathonRegistration } = require('../controllers/hackathonController');
const { registrationLimiter } = require('../middleware/rateLimiter');
const authMiddleware = require('../middleware/authMiddleware');
const adminLogger = require('../middleware/logger');

const router = express.Router();


router.post('/register', registrationLimiter, hackathonRegister);
router.get('/registrations', authMiddleware, adminLogger, getAllHackathonRegistrations);
router.delete('/registrations/:id', authMiddleware, adminLogger, deleteHackathonRegistration);


module.exports = router;
