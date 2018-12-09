var express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const http = require('http');
const dotenv = require('dotenv');

var app = express()
var morgan = require('morgan')

//Routes
const apiRouter = require('./api/routes/api');

app.set('port', (process.env.PORT || 5000))
//app.set('view engine', null);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', apiRouter);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(app.get('port'), function() {
  console.log("\nNode app is running at localhost:" + app.get('port'))
})