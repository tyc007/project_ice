// Get all of our friend data
//var data = require('../friends.json');

var data = {
    "friends": [
        {
            "name": "Scarlett Lawrence",
            "message": "hey, how are you?",
            "title": "HCI student at UCSD",
            "profile": "I'm a passionate UX designer from LA. I love to try new foods from different ethnic backgrounds. Growing up in L.A. was the best place for this experience as I've tried many different dishes.",
            "interest": [ "Basketball", "Reading", "Surfing" ],
            "imageURL": "/images/scarlett.jpg"
        },
        {
            "name": "Taylor Saldana",
            "message": "Hi! I think you're in my class. I see you around a lot.",
            "title": "Computer Science student at UCSD",
            "profile": "Hi I'm Taylor! I moved to San Diego 2 years ago after working for a mobile start up and falling in love with the tech industry. I'm a techie and a coffee addict. ",
            "interest": [ "Coding", "Blogging", "Baking" ],
            "imageURL": "/images/taylor.jpg"
        },
        {
            "name": "Isla Swift",
            "message": "research opportunities this wednesday!",
            "title": "Professor of Psychology",
            "profile": "I got my masters at Cal and my Phd at NYU. I am interested in the human visual system. In my free time, I can always find myself enjoying people-watching.",
            "interest": [ "Hiking", "Traveling", "Stargazing" ],
            "imageURL": "/images/isla.jpg"
        },
        {
            "name": "Leonardo Bale",
            "message": "want to come with me to the center?",
            "title": "Biology student at UCSD",
            "profile": "Hi I'm Leonardo. I'm currently studying biology at UCSD. I love craft beers and independent coffee shops. ",
            "interest": [ "Canoeing", "Photography", "Surfing" ],
            "imageURL": "/images/leonardo.jpg"
        },
        {
            "name": "Jennifer Adams",
            "message": "want to hand out soon?",
            "title": "Computer Science student at UCSD",
            "profile": "Hello, I'm Jennifer. I'm a perfectionist and a hobbyist. I love all things chocolate and hope to one day open my own chocolate store.",
            "interest": [ "Gardening", "Knitting", "Volleyball" ],
            "imageURL": "/images/jennifer.jpg"
        },
        {
            "name": "Zoe Fisher",
            "message": "will you be going to the party?",
            "title": "Economics student at UCSD",
            "profile": "Hi I'm Zoe! I'm looking to meet new people in my time here at UCSD. I enjoy discussing political and religious debates if you're ever down to have a heated conversation. :)",
            "interest": [ "Scrapbooking", "Swimming", "Drawing" ],
            "imageURL": "/images/zoe.jpg"
        },
        {
            "name": "Christian DiCaprio",
            "message": "hey, how are you?",
            "title": "Literature student at UCSD",
            "profile": "Hello, I'm Christian. I'm a PC person.",
            "interest": [ "Photography", "Boxing", "Soccer" ],
            "imageURL": "/images/christian.jpg"
        },
        {
            "name": "Amy Johansson",
            "message": "come join the Cog. Sci. club this friday",
            "title": "Professor of Cognitive Science",
            "profile": "Hello, I work at UC San Diego as a professor of Cognitive Science. I'm interested in the effects of drugs on the mind",
            "interest": [ "Scuba Diving", "Skating", "Skiing" ],
            "imageURL": "/images/amy.jpg"
        }
    ]

}

exports.view = function(req, res){
    res.render('my_friends', data);
};


exports.addFriend = function(req, res){
    var body = req.body;
    data.friends.push({name:body.name, imageURL: body.imageURL});

    console.log(data);
};