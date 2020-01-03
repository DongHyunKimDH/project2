$(document).ready(function()
{
    var _header = $("#header");
    $(window).on("scroll",function() 
    {
        var scrollY = $(this).scrollTop();
        if(scrollY >= _header.outerHeight(true))
        {
            _header.css("background", "rgba(0,0,0,0.5)");
        }
        else if (scrollY == 0) _header.css("background", "#2a7fb8");
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
        }
        _dim.on("click",function()
        {

            $(this).remove();
            $(".menu, #gnb").removeClass("active");
        });
    });
});