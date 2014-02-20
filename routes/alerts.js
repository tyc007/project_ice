/**
 * Created by paulale on 2/12/14.
 */

var data = require('../alerts.json');


exports.view = function(req, res){
    console.log(data);
    res.render('alerts', data);
};

exports.delete = function(req, res){
  /*var name =  req.params.id
  for(var i = 0; i < data.alerts.length; i++){
      if data.alerts[i].name == name{

      }
  }*/

};