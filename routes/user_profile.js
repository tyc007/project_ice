var data = require("../people.json");

exports.userProfile = function(req, res){
    var name = req.params.name;
    var friends = data.people;
    var profile = friends[0];
    console.log(name);
    for(var i = 0; i < friends.length; ++i)
    {
        if(friends[i].name === name)
        {
            profile = friends[i];
        }
    }
    console.log(profile);
    res.render('user_profile', profile);
};