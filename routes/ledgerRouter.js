const express = require('express');
const router = express.Router();
const ledgerController = require('../controllers/ledgerController');
router
    .route('/')
    .post(ledgerController.newLedger)
    .get(ledgerController.getAllLedgers)
router
    .route('/:id')
    .get(ledgerController.getLedger)
    .put(ledgerController.updateLedger)
    .delete(ledgerController.deleteLedger)
module.exports = router;