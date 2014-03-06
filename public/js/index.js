/**
 * Created by paulale on 3/2/14.
 */

'use strict';
var points = 0;
var badges = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    loadTab();

    $('.points').click(function () {
        points = points + 10;
        $('.progress-bar').width(points + '%');
        if(points == 100)
        {
            $('.badge-notification').modal('show');
            badges++;
        }
    })



    $('.badge-notification').on('hidden.bs.modal', function () {
        points = 0;
        $('.progress-bar').width(points + '%').text(points);

    })

    setInterval(notify, 5000);

    setTimeout(function(){
        $('.notifications').tooltip('toggle');
    },15000)
    //setTimeout($('.notifications').tooltip('toggle'), 5000);

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


    $('.nav-button').click( showTab);
    $(".notifications").tooltip().off();


})

function notify(){
    setTimeout($('.friend-notification').modal('show'), 75000);

}

function loadProfile(e) {
    e.preventDefault();
    var page_url=$(this).prop('href');
    $('.view-profile').load(page_url);
    $('.tab-content').hide();
}

function showTab(e) {
    var page_url=$(this).prop('href');

    window.location.replace(page_url);

    $('.view-profile').empty();
    $('.tab-content').show();

}


function loadTab(e) {
    // Javascript to enable link to tab
    var hash = document.location.hash;
    var prefix = "tab_";
    if (hash) {
        $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
    }

// Change hash for page-reload
    $('.nav-tabs a').on('shown', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-image')
                .attr('src', e.target.result)
                .css({'width':'100%'});

        };

        reader.readAsDataURL(input.files[0]);
    }

}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

}

