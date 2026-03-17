const express = require('express');
const { getAllUsers, getUserById, deleteUser } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const { adminLogger } = require('../middleware/logger');

const router = express.Router();

router.use(authMiddleware);
router.use(adminLogger);


router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);

module.exports = router;
