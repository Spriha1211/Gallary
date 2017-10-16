$(function() {
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});
