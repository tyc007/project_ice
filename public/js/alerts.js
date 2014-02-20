/**
 * Created by paulale on 2/13/14.
 */
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

// Hide social point notification
$('#accepted').hide();


$('.ignore_btn').bind('click', function(e){

    $(this).parent().parent().parent().hide('medium');
    var idNumber = $(this).data('id');
    $.post('/delete_user/'+ idNumber, function() {
        return true;
    });
})

function deleteAlert(obj){

}




$('#accept-btn').click(function(){
    /*console.log($(this).attr('data-id'));
    console.log($('#friend-alert').attr('row-id'));
    $('#friend-alert').hide('medium');
    $("#accepted").show("slow");*/
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");

}