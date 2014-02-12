/**
 * Created by paulale on 2/11/14.
 */
var data = require("../data.json");

exports.view = function(req, res){
    console.log(data);
    res.render('user_profile', data);
};