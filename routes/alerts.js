/**
 * Created by paulale on 2/12/14.
 */

var data = require('../alerts.json');

exports.view = function(req, res){
    console.log(data);
    res.render('alerts', data);
};