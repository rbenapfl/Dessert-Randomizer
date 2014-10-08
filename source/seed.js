var request = require('request')
var mongo = require('mongodb')
var monk = require('monk')
var env = require('node-env-file')
env(__dirname + '/.env')
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/desserts", {native_parser:true});
var collection = db.collection('desserts')

var yummilyUrl = 'http://api.yummly.com/v1/api/recipes?'
var yummilyOptions = '&allowedCourse[]=course^course-Desserts&requirePictures=true&maxResult=1'
var apiId = '_app_id=' + process.env.USER_ID
var apiKey  ='&_app_key=' + process.env.USER_KEY
var yummilyRequestUrl = yummilyUrl + apiId + apiKey + yummilyOptions


DatabaseSeeder = {
	populateData: function(array) {
		collection.insert(array,function(){
			console.log("recipes added")
		})
	}
}

request(yummilyRequestUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	var recipes = JSON.parse(body).matches
  	console.log("you are adding " + recipes.length + "recipes into the databse")
  	DatabaseSeeder.populateData(recipes)
  }
})
