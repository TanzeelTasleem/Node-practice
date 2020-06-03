const mongoose = require('mongoose')

const connect = (MONGO_URI)=>{
    mongoose.connect(MONGO_URI , {useNewUrlParser:true , useUnifiedTopology:true })
    .then(()=>{
        console.log("database is connected")
    })
    .catch((err)=>{
        console.log(`erroe is occur : ${err} `)
    })
}

module.exports = connect