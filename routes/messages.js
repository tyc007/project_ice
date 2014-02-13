/**
 * Created by paulale on 2/12/14.
 */
var data = require('../messages.json');

exports.view = function(req, res){
    console.log(data);
    res.render('messages', data);
};