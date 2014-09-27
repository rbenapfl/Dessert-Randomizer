var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dessert Randomizer!' });
});
/* GET desserts */
router.get('/desserts', function(req, res) {
  var db = req.db
  var collection = db.get('desserts')
  collection.find({},{},function(err, recipes) {
  	res.send(recipes)
  })
});

module.exports = router;
