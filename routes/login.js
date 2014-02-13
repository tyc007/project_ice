/**
 * Created by paulale on 2/12/14.
 */
var data = require("../data.json");

exports.view = function(req, res){
    console.log(data);
    res.render('login', data);
};