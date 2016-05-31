var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

 //Creating the application
 var app = express();

//Adding middleware for REST APIs
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Connect to MongoDB
mongoose.connect('mongodb://localhost/movieapp');
mongoose.connection.once('open', function(){

    //Load the models.
app.models = require('./models/index');

console.log('Listening on port 3000 ...');
app.listen(3000);
});
