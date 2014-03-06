'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

// Hide the point reward alert at start
$(".alert").hide();


// Contact User Button that changes after click
$( ".contact-button" ).click(function() {
    console.log(this);
    $(this).text("Greeting Pending");
});



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("User Profile");

}