const express = require('express');
const router = express.Router()
const transactionsController = require('../Controllers/transactionsControllers');


router.route('/')
    .get(transactionsController.getAllTransactions)
    .post(transactionsController.addTransaction)


router.route('/:userId')
    .get(transactionsController.getWishesForUser)

module.exports = router