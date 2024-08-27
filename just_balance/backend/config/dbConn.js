const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (err) {
        console.log("Missing Mongo URI")
        console.log(err)
    }
}

module.exports = connectDb