$(document).ready(function()
{
    var _header = $("#header");
    $(window).on("scroll",function() 
    {
        var scrollY = $(this).scrollTop();
        if(scrollY >= _header.outerHeight())
        {
            _header.addClass("active");
            _header.find(".logo").addClass("active").next().addClass("actives").next().stop().animate({marginTop : "55px"});
        }
        else if(scrollY == 0)
        {
            _header.removeClass("active");
            _header.find(".logo").removeClass("active").next().removeClass("actives").next().stop().animate({marginTop : "60px"});
        }
        
        // else if()
    });
    $(".menu").on("click",function()
    {
        var _dim;
        if($(this).hasClass("active"))
        {
            _header.prev().remove();
            $(".menu, #gnb").removeClass("active");
        }
        else
        {
            $(this).parent().before("<div id='dim'></dim>");
            $(this).toggleClass("active").next().toggleClass("active");
            _dim = $("#dim");
            _dim.on("click",function()
            {
                $(this).remove();
                $(".menu, #gnb").removeClass("active");
            });
        }
    });
});