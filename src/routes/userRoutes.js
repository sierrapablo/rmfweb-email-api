const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/userController');

router.post('/send-email', sendEmail);

module.exports = router;
