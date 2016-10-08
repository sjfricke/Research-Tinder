//-------------------------Setup required packages/files -----------------------------//
var express = require('express');
var app = express();

var logger = require('morgan'); //used to log in console window all request
var cookieParser = require('cookie-parser'); //Parse Cookie header and populate req.cookies
var bodyParser = require('body-parser'); //allows the use of req.body in POST request
var http = require('http').Server(app); //Node.js module creates an instance of HTTP to make calls to Pi
var io = require('./sockets').listen(http) //allows for sockets on the HTTP server instance
var port = process.env.PORT || 3000; //Grabs port number from enviroment for things like Azure, otherwise port 3000
var passport = require('passport'); //used for managing accounts
var flash    = require('connect-flash');
var session = require('express-session');

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
//api to mongoose calls
var api = require('./routes/api');


    // view engine setup
    app.set('views', './views');
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static('app'));

    // required for passport
    app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport

//-------------------------Express and Passport JS configs-----------------------------//
require('./config/passport')(passport); // pass passport for configuration

app.get('/search', function(req, res) {
  req.sendFile("index.html");
});

//-------------------------POST ROUTES-----------------------------//
app.use('/api', api); //sets the API used to access the Database


http.listen(port, function() {
    console.log('listening on *: ' + port);
});
