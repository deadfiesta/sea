$(function () {
    $(window).scroll(function () {
        var $docHeight = $(document).height();
        var $winHeight = $(window).height();
        var $scroll = $(".scroll");
        let $scrollPercent = $(window).scrollTop() / ($docHeight - $winHeight);
        $scroll.css("transform", "scaleX(" + $scrollPercent + ")");
        console.log($scrollPercent);
      });
});