// Get all of our friend data
var data = require('../people.json');
//var friends = require('../friends.json');


exports.view = function(req, res){
	console.log('A testing page');
    data.alertTab = false;
	res.render('index', data);

};

exports.viewAlertTab = function(req, res){
    console.log('B testing page');
    data.alertTab = true;
    res.render('index', data);
}

exports.addFriend = function(req, res){
    var body = req.body;
    data.friends.push({name:body.name, imageURL: body.imageURL});

    console.log(data);
    res.render('index', data);
};