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

var randomnumber = Math.floor(Math.random()*11) * 10;

$('#friend-progress-bar').width(randomnumber + '%');


$('.points').click(function () {
    var $bar =  $('#progress-bar');

    var width = $bar.width();
    var parentWidth = $bar.offsetParent().width();
    var percent = 100*width/parentWidth;

    $bar.width(percent  + 10 + '%');

    if((percent  + 10) >= 100)
    {
        $('.progress-bar').width(0 + '%');
    }
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("User Profile contact page");
}