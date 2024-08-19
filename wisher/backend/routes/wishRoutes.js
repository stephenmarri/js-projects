const express = require('express');
const router = express.Router()
const wishesController = require('../Controllers/wishesControllers');


router.route('/')
    .get(wishesController.getAllWishes)
    .post(wishesController.createNewWish)


router.route('/:userId')
    .get(wishesController.getWishesForUser)

module.exports = router