var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dessert Randomizer!' });
});
/* GET desserts */
router.get('/desserts', function(req, res) {
  var db = req.db.desserts
	db.find().skip(0).limit(2).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
	});
});

module.exports = router;
