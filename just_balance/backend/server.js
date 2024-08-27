require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const {logger, logEvents} = require('./middleware/logger')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectDb = require('./config/dbConn')
const corsOptions = require('./config/corsOptions')
const errorHandler = require('./middleware/errorHandler')

console.log(process.env.NODE_ENV)

connectDb()

const app = express()
const PORT = process.env.PORT

// Middleware
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.json())

app.use(logger)
app.use('/',express.static(path.join(__dirname, '/public')))
app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes')) 
app.use('/transactions', require('./routes/transactionRoutes')) 


// Routes
app.all('*',(req, res)=> {
    res.status(404)
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if(req.accepts('json')){
        res.json({message: '404 Not Found'})
    }else {
        res.type('txt').send('404 Not Found')
    }
})


// Run APP
app.use(errorHandler)

mongoose.connection.once('open', ()=> {
    console.log('Connected to DB')
    app.listen(PORT, ()=> {
        console.log(`Server is running on port: ${PORT}`)
    })
})

mongoose.connection.on('error', err => {
    console.log(`Mongoel Error: ${err}`)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})






