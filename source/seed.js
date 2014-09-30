var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/desserts')
var collection = db.get('desserts')
collection.find({},{},function(err, recipes) {
  	console.log(recipes)
})