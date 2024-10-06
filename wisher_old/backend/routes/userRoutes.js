const express = require('express');
const router = express.Router()
const userController = require('../Controllers/usersController')

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)


// router.route('/:username')
//     .get(userController.getByUsername)

router.route('/authenticate')
    .post(userController.authenticate)

    module.exports = router