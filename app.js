
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var add = require('./routes/add');
var alerts = require('./routes/alerts');
var find_people = require('./routes/find_people');
var login = require('./routes/login');
var messages = require('./routes/messages');
var my_friends = require('./routes/my_friends');
var signup = require('./routes/signup');
var your_profile = require('./routes/your_profile');
var user_profile = require('./routes/user_profile');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// Example route
// app.get('/users', user.list);

app.get('/add', add.addFriend);
app.get('/alerts', alerts.view);
app.get('/find_people', find_people.view);
app.get('/login', login.view);
app.get('/messages', messages.view);
app.get('/my_friends', my_friends.view);
app.get('/signup', signup.view);
app.get('/your_profile', your_profile.view);
app.get('/user_profile', user_profile.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
