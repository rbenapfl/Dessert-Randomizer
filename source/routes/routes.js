var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index', { title: 'Dessert Randomizer!' });
})

router.get('/desserts', function(req, res) {
  var db = req.db.desserts
  db.count({},function(err,count){
    if (err) throw err
    var skipMax = count-15
    var randomSkip = Math.floor((Math.random() * skipMax));
    db.find().skip(randomSkip).limit(16).toArray(function(err, result) {
      if (err) throw err
      res.json(result)
    })
  })
})

router.get('/yummilyaccess', function(req, res) {
  res.json(req.app.locals.keys)
})

module.exports = router;
