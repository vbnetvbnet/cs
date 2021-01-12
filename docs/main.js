(function ($) {
	autoScrolling();
	$(window).resize(function(){
        autoScrolling();
    });
	
    function autoScrolling(){
        $(window).scroll(function() {
	        var hd = $(".site-header"),
	        scroll_top = $(this).scrollTop();
	        scroll_top > 60 ? hd.addClass('fixed'): hd.removeClass('fixed');
	    })
    }
}(jQuery));

/**
* 首页导航
*/
$('.nav-item.dropdown').hover(function(){
    $(this).toggleClass('show')
    $(this).find('.dropdown-menu').toggleClass('show')
});
