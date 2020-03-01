var express = require('express');
var path =  require('path');
var logger = require ('morgan')
var bodyParser = require('body-parser')
var redis = require ('redis')

var app = express()
//redis client
var client = redis.createClient();
client.on('connect',function(){
    console.log('redis server connected')
})



app.set ('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    var title ="Redis App"
    client.lrange('tasks',0,-1,function(err, reply){
        client.hgetall('user',function(err, user){
            if(err){
                console.log(err)
            }
            res.render('index',{
                title:title,
                task:reply,
                user:user
            })
        })

    })
})
app.post('/user/add', function(req, res){
    var user= {}
    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;

    client.hmset('user',['name',user.name,'email',user.email,'phone',user.phone],function(err, reply){
        if(err){
            console.log(err);
        }
        res.redirect('/')
    })

})
app.post('/task/delete', function(req, res){
    var tasksToDel = req.body.tasks;
    client.lrange('tasks',0,-1,function(err,tasks){
        for (var i =0;i <tasks.length;i++){
            if(tasksToDel.indexOf(tasks[i]) > -1){
                client.lrem('tasks',0,tasks[i], function(err,reply){
                    if(err){
                        console.log(err)
                    }
                })
            }
        }
        res.redirect('/')
    })
})
app.post('/task/add',function(req, res){
    var task = req.body.task
    client.lpush('tasks',task,function(err, reply){
        if(err){
            console.log(err)
        }
        console.log('task added')
        res.redirect('/');
    })


})

app.listen(3000);

console.log("redis-app running on port 3000")