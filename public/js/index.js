/**
 * Created by paulale on 3/2/14.
 */

'use strict';
var points = 0;
var badges = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    $('.points').click(function () {
        //var val = Math.floor((Math.random() * 100)) + '%';

        points = points + 10;
        $('.progress-bar').width(points + '%').text(points);
        if(points == 100)
        {
            $('.badge-notification').modal('show');
            //points = 0;
            //$('.progress-bar').width(points + '%').text(points);
            badges++;

        }
    })

    $('.badge-notification').on('hidden.bs.modal', function () {
        points = 0;
        $('.progress-bar').width(points + '%').text(points);

    })

    $('#inbox-popover').click(function(){
        console.log('pop');
        $('#inbox-popover').popover('toggle');
    })

})




/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log('hi!');

}