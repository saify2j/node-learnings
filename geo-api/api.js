const express = require('express')
const router = express.Router()
const User = require('./models/user')

router.get('/users',function(req,res, next){
    User.aggregate([{
        $geoNear: {
          near: {
            'type': 'Point',
            'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
          },
          distanceField: "dist.calculated",
          maxDistance: 100000,
          spherical: true
        }
      }]).then((users) => {
        res.send(users);
      });


})
router.post('/users',function(req,res,next){
    
    User.create(req.body).then(function(user){
        res.send(user)
    }).catch(next)

})
router.put('/users/:id',function(req,res, next){
    res.send({
        'type':'PUT'
    })
})

router.get('/users/:id',function(req,res, next){
    User.findOneAndRemove({'name':req.params.id}).then(function(user){
        res.send(user)
    })
})


module.exports = router
