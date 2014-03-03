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


    $('.stranger_profile').click( loadProfile);

    $('.friend_profile').click( loadProfile);

    $('.nav-tabs').click( showTab);

})

function loadProfile(e) {
    e.preventDefault();
    var page_url=$(this).prop('href');
    $('.view-profile').load(page_url);
    $('.tab-content').hide();
}

function showTab(e) {
    $('.view-profile').empty();
    $('.tab-content').show();

}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {

}