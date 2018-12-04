var express = require('express')
var bodyParser = require('body-parser');
var DependencyContainer = require('./api/helpers/dependency-container');
var BaseController = require('./api/helpers/base-controller');

var app = express()
var morgan = require('morgan')

//morgan.token('ip', (req) => req.connection.remoteAddress);
//app.use(morgan(':ip :method :url :response-time'))
app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var container = new DependencyContainer();

container.registerValue('config', {
  logVerbosity: 1,
  wolframAppId:'WTT84G-UTQ5VX7A86', 
  wolframBaseUrl: 'https://api.wolframalpha.com'
} );

container.registerConstructorsFromPath(__dirname + '/api/services/');
BaseController.bindControllers(__dirname + "/api/endpoints", app, container)

app.listen(app.get('port'), function() {
  console.log("\nNode app is running at localhost:" + app.get('port'))
})