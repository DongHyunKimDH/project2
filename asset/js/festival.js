$(document).ready(function()
{
    $(".open-btn").on("click",function()
    {
        var _openBtn = $(this);
        var _target = $($(this).data("href"));
        var _closeBtn = _target.find(".close-btn");
        var _first = _target.find("[data-link='first']");
        var _last = _target.find("[data-link='last']");
        var timer = 0;
        
        _target.siblings().attr({"aria-hidden" : "true", inert : ""});
        _target.before("<dim id='dim'></dim>");
        var _dim = $("#dim");

        $(window).on("resize", function()
        {
            clearTimeout(timer);
            timer = setTimeout(function() 
            {
                var positionX = ($(this).width() - _target.outerWidth()) / 2 ;
                var positionY = ($(this).height() - _target.outerHeight()) / 2 ;
                _target.css({left : positionX, top : positionY});
            },50);
            console.log(_target);
        });
        $(window).trigger("resize");
        _dim.stop().fadeIn().next().css("visibility", "visible");
        _first.focus();
    });
});