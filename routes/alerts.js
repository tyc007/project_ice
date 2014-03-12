/**
 * Created by paulale on 2/12/14.
 */

var data =
{
    "alerts": [
        {
            "name": "Oscar Howards",
            "alert": "",
            "imageURL": "/images/oscar.jpg"
        },
        {
            "name": "Pam Micaels",
            "alert": "",
            "imageURL": "/images/pam.jpg"
        },
        {
            "name": "Sarah Stevens",
            "alert": "says hello back!",
            "imageURL": "/images/sarah.jpg"
        },
        {
            "name": "Ben Hope",
            "alert": "",
            "imageURL": "/images/ben.jpg"
        }
    ]
}



exports.view = function(req, res){
    console.log(data);
    res.render('alerts', data);
};

exports.viewOld = function(req, res){
    console.log(data);
    res.render('alerts_old', data);
};

exports.delete = function(req, res){
  /*var name =  req.params.id
  for(var i = 0; i < data.alerts.length; i++){
      if data.alerts[i].name == name{

      }
  }*/

};