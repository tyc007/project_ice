'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

$(".alert").hide();


// Contact User Button that changes after click
$( ".contact-button" ).click(function() {
    console.log(this);
    $(this).prop('disabled', true);
    $(this).text("Pending Request");
    $("#request-sent").show("slow");
});



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");
}