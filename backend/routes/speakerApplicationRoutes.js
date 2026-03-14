const express = require('express');
const { speakerApplicationRegister, getAllSpeakerApplications, deleteSpeakerApplication } = require('../controllers/speakerApplicationController');
const { registrationLimiter } = require('../middleware/rateLimiter');
const authMiddleware = require('../middleware/authMiddleware');
const adminLogger = require('../middleware/logger');

const router = express.Router();


router.post('/register', registrationLimiter, speakerApplicationRegister);
router.get('/applications', authMiddleware, adminLogger, getAllSpeakerApplications);
router.delete('/applications/:id', authMiddleware, adminLogger, deleteSpeakerApplication);


module.exports = router;
