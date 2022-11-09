const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router
    .route('/')
    .post(authController.register)
    .get(authController.sign_in)
module.exports = router;