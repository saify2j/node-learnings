const readline = require('readline');
const camelCase = require ('camelcase')
var http = require('http');
var name =camelCase("Saif kamal chowdhury");
var server = http.createServer(function(req, res){
    // console.log('request was made'+req.url);    
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end(`Hey NodeJS, I am ${ name } with package`); 
})
server.listen(8080, '0.0.0.0');
console.log('Listening on port 8080');