// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
    res.render('find_people', data);
};