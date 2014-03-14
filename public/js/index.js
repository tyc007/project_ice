/**
 * Created by paulale on 3/2/14.
 */

'use strict';
var badges = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    loadTab();

    $('.slider').slider()
        .on('slide', function(ev){
            $('#slider-value').val(ev.value);
        });
    
    $('.points').click(function () {
        var $bar =  $('#progress-bar');

        var width = $bar.width();
        var parentWidth = $bar.offsetParent().width();
        var percent = 100*width/parentWidth;

        $bar.width(percent  + 10 + '%');

        if((percent  + 10) >= 100)
       {
           $('.modal').modal('hide');
           $('#badge-notification').modal('show');
            $('.progress-bar').width(0 + '%');
        }
    })


    setInterval(notify, 60000);


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

    $('.load-view').click( loadView);

    $('.nav-button').click( showTab);
    $(".notifications").tooltip().off();

    // for B testing alert tab

    setTimeout(function(){
        $('.notifications').tooltip('show');
    },60000)

    $("#alert-tab").click(function() {
        $(".friend-notifcation-b").modal('show');
        $('.notifications').tooltip('show');
    });

    $(".accept-btn, .decline-btn").click(function(){
        $(".friend-notifcation-b").modal('hide');
        $(".friend-notification").modal('hide');
    })
    $('.progressbartooltip').tooltip('show')

    // Cookies
    /*var name = $.cookie('name');
    var title = $.cookie('title');
    var bio = $.cookie('bio');
    var interests = $.cookie('interests');

    var myName = document.getElementById("my-name");
    myName.innerText = name;

    var myTitle = document.getElementById("my-title");
    myTitle.innerText = title;

    var myBio = document.getElementById("my-bio");
    myBio.innerText = bio;

    var myInterests = document.getElementById("my-interests");
    myInterests.innerText = interests;*/

})

function notify(){
    setTimeout($('.friend-notification').modal('show'), 60000);
}

function loadView(e) {
    e.preventDefault();
    var page_url=$(this).prop('href');
    //alert(page_url);
    $('.view-profile').load(page_url);
    $('.tab-content').hide();
}

function showTab(e) {
    var page_url=$(this).prop('href');

    window.location.replace(page_url);

    $('.view-profile').empty();
    $('.tab-content').show();

    $("#alert-tab").click(function() {
        $('.friend-notifcation-b').modal('show');
    });

}

// For messaging menu
$(function() {
    $('nav#menu').mmenu({
        position: 'right'
    });
});

function loadTab(e) {
    $(document).scrollTop(0);
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

// For camera/file upload
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

function initializePage() {


}

