$(function () {
    $('.register').on('click',function () {
        $('.tc').show();
        $('.mc').show();
    });
    $('.login').on('click',function () {
        $('.tc').show();
        $('.mc').show();
    });
    $('.mc').on('click',function () {
        $('.tc').hide();
        $('.mc').hide();
    });
    $('.close').on('click',function () {
        $('.tc').hide();
        $('.mc').hide();
    });
});
