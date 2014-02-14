/**
 * Created by paulale on 2/13/14.
 */
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

// Hide social point notification
$("#accepted").hide();

// Hide alert if ignored button is clicked
$("#ignore-btn").click(function(){
    $(this).parent().parent().parent().hide('medium');
});

$("#accept-btn").click(function(){
    $(this).parent().parent().parent().hide('medium');
    $("#accepted").show("slow");
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");

}