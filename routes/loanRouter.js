const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
import { authorization } from '../controllers/authController';
router
    .route('/')
    .post(authorization, loanController.newLoan)
    .get(authorization, loanController.getAllLoans)
router
    .route('/:id')
    .get(authorization, loanController.getLoan)
    .put(authorization, loanController.updateLoan)
    .delete(authorization, loanController.deleteLoan)
module.exports = router;