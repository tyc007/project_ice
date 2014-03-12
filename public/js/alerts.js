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
    $.post('/api/new_friend', { name: "Paula", imageURL: "https://scontent-b-sjc.xx.fbcdn.net/hphotos-prn2/t1/1469750_10202497223292623_351132811_n.jpg"});

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");

}