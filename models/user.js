const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim: true,
        required: true
    },
    lastname:{
        type:String,
        trim:true,
        required: true
    },
    userName:{
        type:String,
        trim:true,
        required: true
    },
    password:{
        type:String,
        trim: true,
        required: true
    }
})
const user = mongoose.model('user',userSchema)

module.exports = user