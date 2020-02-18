var express = require('express')
var app = express()

app.get('/',function(req, res){
    res.json({
        'name':'saif kaal'
    })
})
app.listen(8080)
console.log('Listening on port 8080')