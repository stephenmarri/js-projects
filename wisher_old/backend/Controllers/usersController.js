const User = require('../models/User');
const Note = require('../models/Wish');
const brcypt = require('bcrypt');
const asyncHandler = require('express-async-handler');


//! GET - All Users
const getAllUsers = asyncHandler(async(req, res) => {
    const users = await User.find().select('-password').lean()

    if(!users?.length){
        return res.status(400).json({message: 'No users found'})
    }
    res.json(users)
})

//  ! Get By User Name
const getByUsername = asyncHandler(async (req, res) => {
    const {username} = req.params

    const user = await User.findOne({username: username}).lean().exec()

    if(!user){
        return res.status(404).json({message: "user not found"})
    }

    return res.status(200).json(user)
})

//  todo Authenticate
const authenticate = asyncHandler(async (req, res) => {
    const {username, password} = req.body
    console.log("reached auth")

    // 
    if(!username || !password ){
        return res.status(400).json({message: "All Fields are Required"})
    }
    
    const user = await User.findOne({username: String(username).toLowerCase()}).lean().exec()    
    if(!user){
        return res.status(404).json({message: "User Not Found"})
    }
    if(user.password !== password){
        return res.status(400).json({message: "Invalid PIN"})
    }

    if(!user){
        res.status(404).json({message: "User Not Found"})
    }

    res.status(200).json({message: "User Authenticated", createdByUserID: user._id})
})

//! POST - Add a new User
const createNewUser = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password ){
        return res.status(400).json({message: "All fields are required"})
    }

    const duplicate = await User.findOne({username}).lean().exec()
    if(duplicate){
        return res.status(409).json({message: "User already exists"})
    }
 
    const hashPassword = await brcypt.hash(password, 10)
    const userObject = {username, password: password}
    const user = await User.create(userObject)

    if(user){
        res.status(201).json({message: `User '${username}' created with id ${user.id}`})
    }else{
        res.status(400).json({message: `Invalid user data received`})
    }

})



module.exports = {
    getAllUsers,
    getByUsername,
    createNewUser,
    authenticate
}
