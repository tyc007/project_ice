'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    $(".accept-btn, .decline-btn").click(function(){
        $(".friend-notification").modal('hide');
    })
    $('.progressbartooltip').tooltip('show')

    $(".accept-btn, .decline-btn").click(function(){

        $(".friend-notification").modal('hide');
    })
})

// Hide the point reward alert at start
$(".alert").hide();


// Contact User Button that changes after click
$( ".contact-button" ).click(function() {

    $(this).text("Greeting Pending");
});

var randomnumber = Math.floor(Math.random()*11) * 10;
$('#friend-progress-bar').width(randomnumber + '%');

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("User Profile");

}