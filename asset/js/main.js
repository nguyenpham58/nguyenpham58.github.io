$(document).ready(function() {
    $('#nav-toggle').click(function(){
        $('#nav-menu').addClass('show');
    });
    
    $('#nav-close').click(function(){
        $('#nav-menu').removeClass('show');
    });
});