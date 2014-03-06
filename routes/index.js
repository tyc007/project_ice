// Get all of our friend data
var people = require('../people.json');
var friends = require('../friends.json');

exports.view = function(req, res){
	console.log('A testing page');
    people.alertTab = false;
	res.render('index', people);

};

exports.viewAlertTab = function(req, res){
    console.log('B testing page');
    people.alertTab = true;
    res.render('index', people);
}
