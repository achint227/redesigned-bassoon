const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
router
    .route('/')
    .post(loanController.newLoan)
    .get(loanController.getAllLoans)
router
    .route('/:id')
    .get(loanController.getLoan)
    .put(loanController.updateLoan)
    .delete(loanController.deleteLoan)
module.exports = router;