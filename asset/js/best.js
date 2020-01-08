$(document).ready(function()
{
    var _expBtn = $(".explain-btn-wrap button");
    var _detailSet = $(".detail-explain ul");
    var _detailLi = _detailSet.children();
    var liOffsetTop= [];
    var expLiHeight = [];
    var winHei = $(window).height();
    var mySwiper = new Swiper ('.sub-main-cnt1 .swiper-container', {
        // 필요 옵션 추가
        // direction: 'horizontal(기본값)', 'vertical'
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },    
        loop: true,
      });

      // 사진 더보기 버튼 클릭 
      _expBtn.on("click", function()
      {
        var btnIdx = $(this).index();
        if(btnIdx == 0)
        {
          $(this).parent().next().stop().slideToggle();
      // fadeIn 
          
          for(var i=0; i<_detailLi.length; i++)
          {
            liOffsetTop[i] = _detailLi.eq(i).offset().top;
            expLiHeight[i] = _detailLi.eq(i).outerHeight(true);
          }
          $(window).on("scroll",function()
          {
            var scrollY = $(this).scrollTop();
            _detailLi.each(function(i){
              if(scrollY+winHei > (liOffsetTop[i]+expLiHeight[i]*0.5))
                $(this).addClass("active");
              else
                $(this).removeClass("active");
            });
          });
        }
        else
        {
          location.href="/project2/best/best.html";
        }
      });
      $(".detail-explain button").on("click",function()
      {
        _expBtn.eq(1).click();
      });

});