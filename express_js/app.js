var express = require ('express');
var app = express();
app.set('view engine', 'ejs')

app.use('/assets',express.static('assets'));


app.get('/', function(req, res){
    // res.send('this is the home page')
    

    //to serve a html file
    //res.sendFile(__dirname+"/public/index.html")

    //serve a ejs view
    res.render('index')

})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/profile/:name', function(req, res){
    var data = {
        weopons :['AWP', 'AK-47', 'Desert Eagle']
    }
    res.render('profile', {person:req.params.name, data:data})
})
//getting request parameters /?id=something
app.get('/req', function(req, res){
    res.send('id: ' + req.query.id);
  });
app.listen(3000)