// Get all of our friend data
var people = require('../people.json');
var friends = require('../friends.json');

exports.view = function(req, res){
	console.log(people);
	res.render('index', people);

};
