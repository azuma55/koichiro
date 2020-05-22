$(function() {
    // .on('load resize'～でロードされたときとリサイズされたときに発動 
    $(window).on('load resize', function() {
      var visual = $('.visual'),
        // $(window).height();でウィンドウの縦幅を取得 
        wdHeight = $(window).height();
      //cssを書き換えます 
      visual.css({
        height: wdHeight
      });
    });
  });