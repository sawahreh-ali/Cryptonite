$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        $('ul li').removeClass('active');
        $(this).addClass('active');
    });
});