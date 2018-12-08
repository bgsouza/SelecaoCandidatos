var express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const http = require('http');
const dotenv = require('dotenv');

var app = express()
var morgan = require('morgan')

//Routes
const indexRouter = require('./api/routes/index');
const candidaturasRouter = require('./api/routes/candidaturas');
const pessoasRouter = require('./api/routes/pessoas');
const vagasRouter = require('./api/routes/vagas');


app.set('port', (process.env.PORT || 5000))
//app.set('view engine', null);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
// app.use('/candidaturas', candidaturasRouter);
// app.use('/pessoas', pessoasRouter);
// app.use('/vagas', vagasRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

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