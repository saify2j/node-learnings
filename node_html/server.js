var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
    // console.log('request was made'+req.url);    
    res.writeHead(200, {'Content-type':'text/html'});
    var readStream = fs.createReadStream(__dirname+"/src/index.html",'utf8');
    readStream.pipe(res); 
})
server.listen(8080, '0.0.0.0');
console.log('Listening on port 8080');