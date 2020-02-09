const readline = require('readline');
var http = require('http');
var name;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What is your name?', (answer) => {
    // TODO: Log the answer in a database
    name = answer;
    console.log(`Thank you for your valuable feedback: ${name}`);
    rl.close();
    var server = http.createServer(function(req, res){
        console.log('request was made'+req.url);    
        res.writeHead(200, {'Content-type':'text/plain'});
        res.end(`Hey NodeJS, I am ${ name }`); 
    })
    server.listen(8080, '0.0.0.0');
    console.log('Listening on port 8080')
  });
