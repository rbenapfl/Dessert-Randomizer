var request = require('request')
var mongo = require('mongodb')
var monk = require('monk')
var env = require('node-env-file')
env(__dirname + '/.env')
var db = monk('localhost:27017/desserts')
var collection = db.get('desserts')

var yummilyUrl = 'http://api.yummly.com/v1/api/recipes?'
var yummilyOptions = '&allowedCourse[]=course^course-Desserts&requirePictures=true&maxResult=900'
var apiId = '_app_id=' + process.env.USER_ID
var apiKey  ='&_app_key=' + process.env.USER_KEY
var yummilyRequestUrl = yummilyUrl + apiId + apiKey + yummilyOptions

request(yummilyRequestUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	console.log(response)
  	console.log(body)
  }
})

// collection.find({},{},function(err, recipes) {
//   	console.log(recipes)
// })