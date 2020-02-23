const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const geoSchema = Schema({
    type :{
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }

})

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
    },
    geometry:geoSchema

})

const User = mongoose.model('user', userSchema)
module.exports= User