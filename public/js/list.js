'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

$( ".friend_names" ).click(function() {
    console.log("Something clicked.");
});



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");
}