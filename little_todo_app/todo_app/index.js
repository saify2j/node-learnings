var express = require('express');
var todoController = require('./controllers/todoController')
var jsonController = require('./controllers/jsonController')
var app = express();

app.set('view engine','ejs');
app.use (express.static('./assets'));
todoController(app);
jsonController(app);
app.listen(8080);
console.log('Listening on port 8080')