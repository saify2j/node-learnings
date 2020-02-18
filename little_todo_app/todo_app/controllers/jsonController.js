var fetch = require('node-fetch')
var getJson = require('get-json')
let url = 'http://json_serve:8080'
let settings = {method: "GET"}

module.exports = function(app){
    app.get('/', function(req, res){
        getJson(url,function(error, response){
            console.log(response);
            res.render('json_view',{data:response})
            
        })
    })
}