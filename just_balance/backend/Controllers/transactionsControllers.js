const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

//! GET: Show all notes
const getAllTransactions = asyncHandler(async(req, res) => {
    const transactions = await Transaction.find().lean().exec()
    if(!transactions?.length){
       return res.status(404).json({message: "No transactions found"})  
    } 

    // Add username to each note
    const transactionsWithUser = await Promise.all(transactions.map(async (tran) => {
        const createdByUser = await User.findById(tran.createdBy).lean().exec() 
        return {...tran, createdByUser:createdByUser.username}
    }))

    res.status(200).json(transactionsWithUser) 
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
const addTransaction = asyncHandler(async(req, res) => {
    const {createdBy, amount, account, isCredit} = req.body
    
    if(!createdBy || !amount || !account || !isCredit){
        return res.status(404).json({message: "All Fields Required"})   
    }

    //check if user exists
    const user = await User.findById(createdBy).lean().exec()
    if(!user){
        return res.status(404).json({message: "User doesn't exist"})   
    }

    const transactionObject = req.body;
    const cratedTransaction = await Transaction.create(transactionObject) 

    if(!cratedTransaction){
        res.status(400).json({message: "Unable to add transaction"}) 
    }else{
        res.status(200).json({message: `Transaction added successfully. Id: ${cratedTransaction._id}`})
    }

})

module.exports = {
    getAllTransactions,
    getWishesForUser,
    addTransaction
}