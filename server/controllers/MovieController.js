var restful = require('node-restful');

module.exports = function(app, route){

  //Setup the controller for REST
  var rest = restful.model(
    'movie',
    app.models.movie
    ).methods(['get', 'put','post', 'delete']);

//register this endpoint with the app
rest.register(app, route);

//Return Middlewaree
return function(req, res, next){
  next();
  };
};
