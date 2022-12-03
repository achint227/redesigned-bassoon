const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
import { authorization } from '../controllers/authController';

router
    .route('/')
    .post(authorization, customerController.newCustomer)
    .get(authorization, customerController.getAllCustomers)
router
    .route('/:id')
    .get(authorization, customerController.getCustomer)
    .put(authorization, customerController.updateCustomer)
    .delete(authorization, customerController.deleteCustomer)
module.exports = router;