const express= require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/geoapi',{ useNewUrlParser: true , useUnifiedTopology:true})
mongoose.Promise = global.Promise;
const app = express()

app.use(bodyParser.json())

app.use('/api',require('./api'))

app.use(function(err, req, res, next){
    
    res.status(402).send({
        error: err.message
    })
})

app.listen(3000)