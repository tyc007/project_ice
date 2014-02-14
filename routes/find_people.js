// Get all of our friend data
var data = require('../people.json');

exports.view = function(req, res){
    res.render('find_people', data);
};