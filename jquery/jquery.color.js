;(function($){
    $.fn.color=function(option){
        var defaults={
            bg:'red'
        }
        var setting = $.extend({},defaults,option)
        $(this).css('color',setting.bg)
    }

})(jQuery);