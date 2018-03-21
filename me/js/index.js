$(function() {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#17bed2',
    trackColor:	"#ecf0f1",
    size: 160,
    animate: 500
  });
});



$(function () {
  // Smooth Scroll
  $('a[href*=#]').bind('click', function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
});