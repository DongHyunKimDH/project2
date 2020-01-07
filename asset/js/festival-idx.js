$(document).ready(function()
{
    var mySwiper = new Swiper ('.sub-main-cnt1 .swiper-container', {
        // 필요 옵션 추가
        // direction: 'horizontal(기본값)', 'vertical'
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },    
        loop: true,
      });
});