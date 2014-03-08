'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

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