const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router
    .route('/')
    .post(authController.register)
    .get(authController.sign_in)
router
    .route('/logout')
    .get(authController.authorization, (req, res) => {
        return res
            .clearCookie("access_token")
            .status(200)
            .json({ message: "Successfully logged out" });
    });
module.exports = router;