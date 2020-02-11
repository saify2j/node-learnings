const http = require ('http')
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'application/json'});
    var food = {
        'food':['EGG', 
                'RICE', 
                'CHICKEN']
    }
    food['food'].push('BEEF');
    res.end(JSON.stringify(food));
})
server.listen('80', '0.0.0.0');

