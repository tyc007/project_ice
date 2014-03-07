/**
 * Created by paulale on 2/19/14.
 */
'use strict';

$(document).ready(function(){
    initializePage();
    var username = $('#username').val();
    var password = $('#password').val();

    var expDate = new Date();
    expDate.setTime(expDate.getTime() + (5 * 60 * 1000)); //set to expire in 3 minutes

    $.cookie('username', username, { expires: expDate});
    $.cookie('password', password, { expires: expDate});

    console.log('login page javascript is connected');
});

/*function initializePage(){

}*/

