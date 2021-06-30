$(function() {
        $(window).scroll(function() {
            var scroHei = $(window).scrollTop();//滚动的高度
            if (scroHei > 1000) {
                $('.side').fadeIn();
            } else {
                $('.side').fadeOut();
            }
        })
    })