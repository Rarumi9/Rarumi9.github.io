$(window).on('load scroll', function(){

  /* 個別アニメーション */
  var elem = $('.animated');
  elem.each(function () {
    var isAnimate = $(this).data('animate');
    var isAnimateDelay = $(this).data('animate-delay');
    var isAnimateDuration = $(this).data('animate-duration');
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh){
      if(isAnimateDelay){
        $(this).css('animation-delay',isAnimateDelay);
      }
      if(isAnimateDuration){
        $(this).css('animation-duration',isAnimateDuration);
      }
      $(this).addClass(isAnimate);
    }
  });

  /* サービス */
  var service = $('.service-image');
  service.each(function () {

    var isPlay = 'is-play';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 4)){
      $(this).addClass(isPlay);
    }
  });

});