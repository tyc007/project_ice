// Get all of our friend data
var data = require('../friends.json');

exports.view = function(req, res){
    res.render('my_friends', data);
};