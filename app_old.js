//-------------------------Setup required packages/files -----------------------------//
var express = require('express');
var path = require('path');
var logger = require('morgan'); //used to log in console window all request
var cookieParser = require('cookie-parser'); //Parse Cookie header and populate req.cookies
var bodyParser = require('body-parser'); //allows the use of req.body in POST request

var port = process.env.PORT || 3000; //Grabs port number from enviroment for things like Azure, otherwise port 3000

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');  
//var io = require('./sockets').listen(http) //allows for sockets on the HTTP server instance

//-------------------------Setup Mongo-----------------------------//
var credientals = require('./config/credientals.js');

//sets up Mongoose
var mongoose = require('mongoose'); //added for Mongo support
var MongooseDB = mongoose.connect(credientals.DB_URL).connection; //makes connection
MongooseDB.on('error', function(err) { console.log(err.message); console.log("Is MongoDB Running?"); });
MongooseDB.once('open', function() {
  console.log("mongooseDB connection open");
});

//-------------------------getting funtions/routes from other files-----------------------------//



var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'shhsecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use('/', routes);
app.use('/users', users);

//api to mongoose calls
var api = require('./routes/api');
app.use('/api', api); //sets the API used to access the Database



app.listen(port);

//var http = require('http').Server(app); //Node.js module creates an instance of HTTP to make calls to Pi
//
//http.listen(port, function() {
//    console.log('listening on *: ' + port);
//});


module.exports = app;