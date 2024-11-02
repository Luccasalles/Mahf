$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

$(document).ready(function() {
    $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
    
        event.preventDefault();

      
        var target = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); 
    });
});

$(document).ready(function() {
    $('#btn-read-reviews').on('click', function() {s
        $('html, body').animate({
            scrollTop: $('#testimonials').offset().top
        }, 800);
    });
});


