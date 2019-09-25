$(function () {
    var wd = $('.fenye').find('li').children('a').outerWidth(true)
    // console.log($('.fenye').find('li').width())
    console.log(wd)
    $('.fenye').find('li').children('a').css('outerHeight(true)',wd)
    // $('.fenye').find('li').children('a').css('line-height',wd)
})
