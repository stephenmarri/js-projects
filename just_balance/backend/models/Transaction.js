const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const transactionSchema = new mongoose.Schema(
    {
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }, 
        amount: {
            type: Number,            
            required: true
        },        
        isCredit: {
            type: Boolean,
            default: true,            
            required: true
        },        
        account: {
            type: String,            
            required: true
        },        

    },
    {
        timestamps: true
    }
)

transactionSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums', 
    start_seq: 100
})

module.exports = mongoose.model("Transaction", transactionSchema)