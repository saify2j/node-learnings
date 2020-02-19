const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = Schema({
    name:{
        type: String,
        required: [true,'The name field is a required value']
    },
    password:{
        type: String,
        required: [true,'Password is a must']
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean
    }

})

const User = mongoose.model('user', userSchema)
module.exports= User