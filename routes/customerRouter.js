const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
router
    .route('/')
    .post(customerController.newCustomer)
    .get(customerController.getAllCustomers)
router
    .route('/:id')
    .get(customerController.getCustomer)
    .put(customerController.updateCustomer)
    .delete(customerController.deleteCustomer)
module.exports = router;