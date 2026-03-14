const express = require('express');
const { productShowcaseRegister, getAllProductShowcases, deleteProductShowcase } = require('../controllers/productShowcaseController');
const { registrationLimiter } = require('../middleware/rateLimiter');
const authMiddleware = require('../middleware/authMiddleware');
const adminLogger = require('../middleware/logger');

const router = express.Router();


router.post('/register', registrationLimiter, productShowcaseRegister);
router.get('/registrations', authMiddleware, adminLogger, getAllProductShowcases);
router.delete('/registrations/:id', authMiddleware, adminLogger, deleteProductShowcase);


module.exports = router;
