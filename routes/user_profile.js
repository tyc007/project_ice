var data = require("../friends.json");

exports.userProfile = function(req, res){
    var name = req.params.name;
    var friends = data.friends;
    var profile = friends[0];
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