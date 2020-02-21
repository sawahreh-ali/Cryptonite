import { homeView } from './home-view.js';

$(document).ready(function() {
    $.get( "https://api.coingecko.com/api/v3/coins/list", function( data ) {
        route('Home', data);
      });
    $('ul').on('click', 'li', function() {
        $('ul li').removeClass('active');
        $(this).addClass('active');
        route($(this).children().text());
        
    });
});

function route(view, assets) {
    if(view === 'Home')
        $('#app').html(homeView(assets));
    else if (view === 'Live Reports')
        liveReportsView();
    else if(view == 'About')
        aboutView();
}
