'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

$("#dialog").dialog({ autoOpen: false });

// Contact User Button that changes after click
$( ".contact-button" ).click(function() {
    console.log(this);
    $("#dialog").dialog('open');
    return false;

});




/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");
}