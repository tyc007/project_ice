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
        // $('.progress-bar').width(points + '%').text(points);
        $('.progress-bar').width(points + '%');
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

    /*$('#inbox-popover').click(function(){
        console.log('pop');
        $('#inbox-popover').popover('toggle');
    })*/

    $('.some-popover-link').popover({
        container: 'body',
        html: true,
        placement: 'bottom'
    });

    $(document).click(function (e) {
        $('.some-popover-link').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                //$(this).popover('hide');
                if ($(this).data('bs.popover').tip().hasClass('in')) {
                    $(this).popover('toggle');
                }

                return;
            }
        });
    });

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

