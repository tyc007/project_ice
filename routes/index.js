// Get all of our friend data
//var people = require('../people.json');
//var friends = require('../friends.json');

var data = {
    "people": [
        {
            "name": "Mike Johnson",
            "firstName": "Mike",
            "lastName": "Johnson",
            "distance": "1.5",
            "title": "Professor of Psychology",
            "profile": "Hi I'm Mike. I recently moved here from Chicago and am excited to meet new people.",
            "interest": [ "Gaming", "Reading", "Traveling" ],
            "imageURL": "/images/mike.jpg"
        },
        {
            "name": "Hector Garcia",
            "firstName": "Hector",
            "lastName": "Garcia",
            "distance": "0.4",
            "title": "Computer Science student at UCSD",
            "profile": "Sports and food, that's all you need to know",
            "interest": [ "Basketball", "Hiking", "Baking" ],
            "imageURL": "/images/hector.jpg"
        },
        {
            "name": "Jose Sanchez",
            "firstName": "Jose",
            "lastName": "Sanchez",
            "distance": "1.8",
            "title": "Professor of Literature",
            "profile": "I'm a yogi, a foodie, and an oenophile. Love a good read over a glass of wine.",
            "interest": [ "Cooking", "Stargazing", "Yoga" ],
            "imageURL": "/images/jose.jpg"
        },
        {
            "name": "Tom Hamilton",
            "firstName": "Tom",
            "lastName": "Hamilton",
            "distance": "3.8",
            "title": "Biology student at UCSD",
            "profile": "Hello! I'm originally from Napa Valley. I'm a graduate student at UCSD hoping to go into the field of medicine some day.",
            "interest": [ "Canoeing", "Blogging", "Knitting" ],
            "imageURL": "/images/tom.jpg"
        },
        {
            "name": "Ben Hope",
            "firstName": "Ben",
            "lastName": "Hope",
            "distance": "4.2",
            "title": "Professor of Cognitive Science",
            "profile": "What's up! I'm Ben. I love all things active and outdoors. I hope to one day be on Man VS. Nature.",
            "interest": [ "Gardening", "Surfing", "Skiing" ],
            "imageURL": "/images/ben.jpg"
        },
        {
            "name": "Sarah Stevens",
            "firstName": "Sarah",
            "lastName": "Stevens",
            "distance": "2.2",
            "title": "English Lit. student at UCSD",
            "profile": "Hi I'm Sarah! I'm a student at UC San Diego and an intern for the San Diego Newspaper.",
            "interest": [ "Gaming", "Scrapbooking", "Photography" ],
            "imageURL": "/images/sarah.jpg"
        },
        {
            "name": "Pam Micaels",
            "firstName": "Pam",
            "lastName": "Michaels",
            "distance": "3.0",
            "title": "Math major at UCSD",
            "profile": "Hi I'm Pam. I grew up in Vegas and worked at a circus before I decided to pursue a degree.",
            "interest": [ "Skating", "Volleybal", "Coding" ],
            "imageURL": "/images/pam.jpg"
        },
        {
            "name": "Oscar Howards",
            "firstName": "Oscar",
            "lastName": "Howards",
            "distance": "0.2",
            "title": "HCI student at UCSD",
            "profile": "I'm a native San Diegan who enjoys being active. I'm also a huge fan of Harry Potter and Star Wars.",
            "interest": [ "Swimming", "Soccer", "Drawing" ],
            "imageURL": "/images/oscar.jpg"
        }
    ],

    "friends": [
        {
            "name": "Scarlett Lawrence",
            "firstName": "Scarlett",
            "lastName": "Lawrence",
            "message": "hey, how are you?",
            "title": "HCI student at UCSD",
            "profile": "I'm a passionate UX designer from LA. I love to try new foods from different ethnic backgrounds. Growing up in L.A. was the best place for this experience as I've tried many different dishes.",
            "interest": [ "Basketball", "Reading", "Surfing" ],
            "imageURL": "/images/scarlett.jpg"
        },
        {
            "name": "Michael Halpert",
            "firstName": "Michael",
            "lastName": "Halpert",
            "message": "what' up?",
            "title": "Engineering student at UCSD",
            "profile": "I'm a 4th year at UCSD. I'm from Idaho so living in a beach city now is great!",
            "interest": [ "Designing", "Programming", "Cycling" ],
            "imageURL": "/images/michael.jpg"
        },
        {
            "name": "Angela Howard",
            "firstName": "Angela",
            "lastName": "Howard",
            "message": "how you doing stranger?",
            "title": "Neuroscience student at UCSD",
            "profile": "I'm a transfer student from Orange County that loves to be in the water. Whether I'm surfing or swimming I'll be having a great time.",
            "interest": [ "Swimming", "Surfing", "Knitting" ],
            "imageURL": "/images/angela.jpg"
        },
        {
            "name": "Jim Scott",
            "firstName": "Jim",
            "lastName": "Scott",
            "message": "hello!",
            "title": "HCI student at UCSD",
            "profile": "I love designing websites on my free time. If I'm not doings that then I'm bloggin about website design.",
            "interest": [ "Basketball", "Canoeing", "Blogging" ],
            "imageURL": "/images/jim.jpg"
        },
        {
            "name": "Ryan Beesly",
            "firstName": "Ryan",
            "lastName": "Beesly",
            "message": "hey hey hey :)",
            "title": "Biology student at UCSD",
            "profile": "I'm originally from NY but moved to SD 3 years ago. I'll be completing my Bachelors in bio real soon, and I'll be taking the MCAT this year for Med. school.",
            "interest": [ "Baseball", "Soccer", "Stargazing" ],
            "imageURL": "/images/ryan.jpg"
        },
        {
            "name": "Taylor Saldana",
            "firstName": "Taylor",
            "lastName": "Saldana",
            "message": "Hi! I think you're in my class. I see you around a lot.",
            "title": "Computer Science student at UCSD",
            "profile": "Hi I'm Taylor! I moved to San Diego 2 years ago after working for a mobile start up and falling in love with the tech industry. I'm a techie and a coffee addict. ",
            "interest": [ "Coding", "Blogging", "Baking" ],
            "imageURL": "/images/taylor.jpg"
        },
        {
            "name": "Isla Swift",
            "firstName": "Isla",
            "lastName": "Swift",
            "message": "research opportunities this wednesday!",
            "title": "Professor of Psychology",
            "profile": "I got my masters at Cal and my Phd at NYU. I am interested in the human visual system. In my free time, I can always find myself enjoying people-watching.",
            "interest": [ "Hiking", "Traveling", "Stargazing" ],
            "imageURL": "/images/isla.jpg"
        },
        {
            "name": "Leonardo Bale",
            "firstName": "Leanardo",
            "lastName": "Bale",
            "message": "want to come with me to the center?",
            "title": "Biology student at UCSD",
            "profile": "Hi I'm Leonardo. I'm currently studying biology at UCSD. I love craft beers and independent coffee shops. ",
            "interest": [ "Canoeing", "Photography", "Surfing" ],
            "imageURL": "/images/leonardo.jpg"
        },
        {
            "name": "Jennifer Adams",
            "firstName": "Jennifer",
            "lastName": "Adams",
            "message": "want to hand out soon?",
            "title": "Computer Science student at UCSD",
            "profile": "Hello, I'm Jennifer. I'm a perfectionist and a hobbyist. I love all things chocolate and hope to one day open my own chocolate store.",
            "interest": [ "Gardening", "Knitting", "Volleyball" ],
            "imageURL": "/images/jennifer.jpg"
        },
        {
            "name": "Zoe Fisher",
            "firstName": "Zoe",
            "lastName": "Fisher",
            "message": "will you be going to the party?",
            "title": "Economics student at UCSD",
            "profile": "Hi I'm Zoe! I'm looking to meet new people in my time here at UCSD. I enjoy discussing political and religious debates if you're ever down to have a heated conversation. :)",
            "interest": [ "Scrapbooking", "Swimming", "Drawing" ],
            "imageURL": "/images/zoe.jpg"
        },
        {
            "name": "Christian DiCaprio",
            "firstName": "Christian",
            "lastName": "DiCaprio",
            "message": "hey, how are you?",
            "title": "Literature student at UCSD",
            "profile": "Hello, I'm Christian. I'm a PC person.",
            "interest": [ "Photography", "Boxing", "Soccer" ],
            "imageURL": "/images/christian.jpg"
        },
        {
            "name": "Amy Johansson",
            "firstName": "Amy",
            "lastName": "Johnsson",
            "message": "come join the Cog. Sci. club this friday",
            "title": "Professor of Cognitive Science",
            "profile": "Hello, I work at UC San Diego as a professor of Cognitive Science. I'm interested in the effects of drugs on the mind",
            "interest": [ "Scuba Diving", "Skating", "Skiing" ],
            "imageURL": "/images/amy.jpg"
        }
    ]

}

exports.view = function(req, res){
	console.log('A testing page');
    data.alertTab = false;
	res.render('index', data);

};

exports.viewAlertTab = function(req, res){
    console.log('B testing page');
    data.alertTab = true;
    res.render('index', data);
}

exports.addFriend = function(req, res){
    var body = req.body;
    data.friends.push({name:body.name, imageURL: body.imageURL});

    console.log(data);
    res.render('index', data);
};