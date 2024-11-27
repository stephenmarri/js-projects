const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) =>{
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by my CORS'))
        }
    },
    credentials: true,
    optionsSuccessState: 200,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
}

module.exports = corsOptions