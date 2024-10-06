const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Note = require('../models/Wish');
const User = require('../models/User');

//! GET: Show all notes
const getAllWishes = asyncHandler(async(req, res) => {
    const notes = await Note.find().lean().exec()
    if(!notes?.length){
       return res.status(404).json({message: "No notes found"})  
    } 

    // Add username to each note
    const notesWithUser = await Promise.all(notes.map(async (note) => {
        const createdByUser = await User.findById(note.createdBy).lean().exec() 
        const createdForUser = await User.findById(note.createdFor).lean().exec() 
        return {...note, createdByUser:createdByUser.username, createdForUser:createdForUser.username}
    }))

    res.status(200).json(notesWithUser) 
})

// TODO GET: Show notes for User
const getWishesForUser = asyncHandler(async(req, res) => {
    const {userId} = req.params;
    const user = await User.findOne({_id: userId}).lean().exec()

    if(!user){
        return res.status(404).json({message: "user not found"})
    }

    const notes = await Note.find({"createdFor": userId}).lean().exec()
    console.log(userId)

    if(!notes?.length){
       return res.status(404).json({message: "No notes found"})  
    } 

    // Add username to each note
    const notesWithUser = await Promise.all(notes.map(async (note) => {
        const createdByUser = await User.findById(note.createdBy).lean().exec() 
        const createdForUser = await User.findById(note.createdFor).lean().exec() 
        return {...note, createdByUser:createdByUser.username, createdForUser:createdForUser.username}
    }))

    res.status(200).json(notesWithUser) 
})

// Todod POST: Create New Notes
const createNewWish = asyncHandler(async(req, res) => {
    const {createdBy} = req.body
    
    if(!createdBy){
        return res.status(404).json({message: "All Fields Required"})   
    }

    //check if user exists
    const userForNote = await User.findById(createdBy).lean().exec()
    if(!userForNote){
        return res.status(404).json({message: "User doesn't exist"})   
    }

    const noteObject = req.body;
    const cratedNote = await Note.create(noteObject) 

    if(!cratedNote){
        res.status(400).json({message: "Unable to create wish"}) 
    }else{
        res.status(200).json({message: `Wishes sent successfully. Id: ${cratedNote._id}`})
    }

})

module.exports = {
    getAllWishes,
    getWishesForUser,
    createNewWish
}