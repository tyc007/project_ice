'use strict';

$(document).ready(function(){
    initializePage();
    console.log('sign up page javascript is connected');

    $('#signupform').submit(function(e){

        var name = $('#name').val();
        var password = $('#password').val();
        var email = $('#email').val();
        var title = $('#title').val();
        var bio = $('#bio').val();
        var interests = $('#interests').val();

        var expDate = new Date();
        expDate.setTime(expDate.getTime() + (3 * 60 * 1000));

        // set cookies to expire in 1 day
        $.cookie('name', name, { expires: expDate, path:'/'});
        $.cookie('password', password, { expires: expDate, path:'/'});
        $.cookie('email', email, { expires : expDate, path:'/'});
        $.cookie('title', title, { expires : expDate, path:'/'});
        $.cookie('bio', bio, { expires : expDate, path:'/'});
        $.cookie('interests', interests, { expires : expDate, path:'/'});
    });


});



