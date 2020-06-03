const express = require('express')

const connect = require('./db.js') 
const dotenv = require('dotenv')

const logger = require('./middelware/middelware.js')

dotenv.config({path:'./config/config.env'})

const PORT = process.env.PORT || 3001

const app = express()
 
app.use(express.json())

app.use(logger)

connect(process.env.MONGO_URI)

const routes = require('./routes/routes.js')

app.use(routes)



app.listen(PORT,()=>{console.log(`server running in ${process.env.NODE_ENV} enviroment on port : ${process.env.PORT}`)})