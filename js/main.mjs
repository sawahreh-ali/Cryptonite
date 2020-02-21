$(document).ready(function() {
    route('Home');
    $('ul').on('click', 'li', function() {
        $('ul li').removeClass('active');
        $(this).addClass('active');
        route($(this).children().text());
        
    });
});

function route(view) {
    if(view === 'Home')
        homeView();
    else if (view === 'Live Reports')
        liveReportsView();
    else if(view == 'About')
        aboutView();
    else 
        pageNotFoundView();
}

function homeView() {
    $('#app').html('<h1>Home View Works</h1>');
}

function liveReportsView() {
    $('#app').html('<h1>Live Reports View Works</h1>');
}

function aboutView() {
    $('#app').html('<h1>About View Works</h1>');
}

function pageNotFoundView() {
    $('#app').html('<h1>Page Not Found View Works</h1>');
}
