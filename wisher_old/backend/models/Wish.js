const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const wishSchema = new mongoose.Schema(
    {
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }, 
        createdFor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },        
        questionOne: {
            type: String,
            required: true
        },
        questionTwo: {
            type: String,
            required: true
        },
        questionThree: {
            type: String,
            required: true
        },
        questionFour: {
            type: String,
            required: true
        },
        questionFive: {
            type: String,
            required: true
        },
        questionSix: {
            type: String,
            required: true
        },
        questionSeven: {
            type: String,
            required: true
        },
        wishes: {
            type: String,
            default: true
        },

    },
    {
        timestamps: true
    }
)

wishSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums', 
    start_seq: 500
})

module.exports = mongoose.model("Wish", wishSchema)