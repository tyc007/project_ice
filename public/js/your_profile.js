/**
 * Created by paulale on 2/19/14.
 */
'use strict';

$(document).ready(function(){
    initializePage();

    console.log('your profile page javascript is connected');

    var name = $.cookie('name');
    var title = $.cookie('title');
    var bio = $.cookie('bio');
    var interests = $.cookie('interests');

    var myName = document.getElementById("my-name");
    myName.innerText = name;

    var myTitle = document.getElementById("my-title");
    myTitle.innerText = title;

    var myBio = document.getElementById("my-bio");
    myBio.innerText = bio;

    var myInterests = document.getElementById("my-interests");
    myInterests.innerText = interests;

});


