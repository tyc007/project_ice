
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

var alerts = require('./routes/alerts');
var find_people = require('./routes/find_people');
var login = require('./routes/login');
var my_friends = require('./routes/my_friends');
var signup = require('./routes/signup');
var user_profile = require('./routes/user_profile');
var user_profile_contact = require('./routes/user_profile_contact');
var your_profile = require('./routes/your_profile');

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
app.get('/b', index.viewAlertTab);
// Example route
// app.get('/users', user.list);

app.get('/alerts', alerts.view);
app.get('/alerts_old', alerts.viewOld);
app.get('/login', login.view);
app.get('/my_friends', my_friends.view);
app.get('/signup', signup.view);
app.get('/user_profile', user_profile.userProfile);
app.get('/user_profile/:name', user_profile.userProfile);
app.get('/user_profile_contact_round/:name', user_profile_contact.viewRound);
app.get('/user_profile_contact/:name', user_profile_contact.userProfile);
app.get('/your_profile', your_profile.view);
app.post('/delete_user/:id', alerts.delete);
app.post('/api/new_friend', index.addFriend);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
