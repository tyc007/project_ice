/**
 * Created by paulale on 2/13/14.
 */
var data = require("../data.json");

exports.view = function(req, res){
    console.log(data);
    res.render('chatting', data);
};