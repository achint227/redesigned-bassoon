const express = require('express');
const router = express.Router();
const ledgerController = require('../controllers/ledgerController');
import { authorization } from '../controllers/authController';

router
    .route('/')
    .post(authorization, ledgerController.newLedger)
    .get(authorization, ledgerController.getAllLedgers)
router
    .route('/:id')
    .get(authorization, ledgerController.getLedger)
    .put(authorization, ledgerController.updateLedger)
    .delete(authorization, ledgerController.deleteLedger)
module.exports = router;