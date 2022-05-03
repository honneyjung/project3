$(window).scroll(function() {
    var wScroll=$(this).scrollTop();
    console.log(wScroll);
    $('.box').css({
        'transform-origin': '50%',
        'transform': 'rotate('+wScroll/3+'deg)',
        'top': wScroll/20+'px'
    });
})