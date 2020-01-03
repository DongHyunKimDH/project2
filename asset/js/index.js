$(document).ready(function()
{
    
    var mySwiper = new Swiper ('.main-cnt1 .swiper-container', {
        // 필요 옵션 추가
        // direction: 'horizontal(기본값)', 'vertical'
        // loop: false(기본값), true / 처음 마지막 무한롤링
        pagination: {
          el: '.main-cnt1 .swiper-pagination',
          type: 'bullets', // bullets(동그라미아이콘), fraction(현재 / 전체)
          // clickable : true, // 인디케이터 클릭시 슬라이더 이동
        },
      });
  

    var _ul = $("#helpIconWrap .help-icon ul");
    var _span = $("#helpIconWrap .help-icon-paging span");
    var liWidth = _ul.children().outerWidth(true);
    var liLength = _ul.children().length;
    var ulHeight = _ul.outerHeight(true);
    var pageSet = 3;
    var blockSet = 0;
    var maxBlockSet = Math.ceil(liLength/pageSet)-1;
    _ul.parent().css("width",liWidth*pageSet);
    _ul.parents("#helpIconWrap").css("width",liWidth*pageSet);
    _ul.css("width",liWidth*liLength);
    _span.eq(0).text(blockSet+1);
    _span.eq(1).text(maxBlockSet+1);
    ariaHidden();
    $("#helpIconWrap .help-icon-btn button").on("click",function()
    {
      var btnIdx = $(this).index();
      if(btnIdx == 0 && blockSet == 0) return false;
      if(btnIdx == 1 && blockSet == maxBlockSet) return false;
      if(_ul.is(":animated")) return false;
      btnIdx == 0 ? blockSet-- : blockSet++;
      _ul.stop().animate({marginLeft : -liWidth*pageSet*blockSet},ariaHidden);
      _span.eq(0).text(blockSet+1);
    });
    function ariaHidden() 
    {
      _ul.children().attr("aria-hidden","true");
      _ul.children().eq(blockSet*pageSet).nextUntil(_ul.children().eq(blockSet*pageSet+pageSet)).addBack().attr("aria-hidden","false");
    }
    $(".detail-icon").on("click",function()
    {
      $(this).toggleClass("active");
      if($(this).hasClass("active"))
      {
        _ul.css({width : liWidth*pageSet, height : ulHeight*2, marginLeft : 0});
        $(".help-icon-btn, .help-icon-paging").css("visibility","hidden");
        _ul.children().attr("aria-hidden","false");
      }
      else
      {
        _ul.css({width : liWidth*liLength, height : ulHeight*1, marginLeft :  -liWidth*pageSet*blockSet});
        $(".help-icon-btn, .help-icon-paging").css("visibility","visible");
        ariaHidden();
      }
    });

});