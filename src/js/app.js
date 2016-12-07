// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/bootstrap.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

$('.panel-title a').on('click', function(e) {
    $('.panel-default').removeClass('section--grey');
    $(this).closest('.panel-default').toggleClass('section--grey');
});

$(document).on('click', 'a.btn', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
})
