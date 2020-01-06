$(document).ready(function()
{
    var _winWidth = $(window).width();
    var _liWidth = $(".modal-slider ul li");
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
        _first.on("keydown",function (e)
        {
            if(e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                _last.focus();
            }
        });
        _last.on("keydown",function(e)
        {
            if(e.keyCode == 9 && !e.shiftKey) {
                e.preventDefault();
                _first.focus();
            }
        });
        _closeBtn.on("click",function()
        {
            _dim.stop().fadeOut(function() 
            {
                $(this).remove();
            });
            _target.css("visibility","hidden").siblings().removeAttr("aria-hidden inert");
            _openBtn.focus();
        });
        _dim.on("click",function()
        {
            _closeBtn.click();
        });
        $(window).on("keydown",function(e)
        {
            if(e.keyCode == 27) _closeBtn.click();
        });

    });

    var _ul = $(".modal-slider ul");
    _liWidth = _winWidth;
    var liLength = _ul.children().length;
    var pageSet = 1;
    var blockSet = 0;
    var maxBlockSet = Math.ceil(liLength/pageSet)-1;
    
    _ul.css({width : _liWidth*liLength});
    _ul.children().css({width : _winWidth});
    ariaHidden();
    $(".modal-slider .modal-slider-btn button").on("click",function()
    {
      var btnIdx = $(this).index();
      if(btnIdx == 0 && blockSet == 0) return false;
      if(btnIdx == 1 && blockSet == maxBlockSet) return false;
      if(_ul.is(":animated")) return false;
      btnIdx == 0 ? blockSet-- : blockSet++;
      _ul.stop().animate({marginLeft : -_liWidth*pageSet*blockSet},ariaHidden);
    });
    function ariaHidden() 
    {
      _ul.children().attr("aria-hidden","true");
      _ul.children().eq(blockSet*pageSet).nextUntil(_ul.children().eq(blockSet*pageSet+pageSet)).addBack().attr("aria-hidden","false");
    }

});