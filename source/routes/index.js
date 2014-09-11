var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dessert Randomizer!' });
});
/* GET desserts */
router.get('/desserts', function(req, res) {
  res.send({dessertJson: 'it works'});
});

module.exports = router;
