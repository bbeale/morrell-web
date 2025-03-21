function resize() {
  if ($(window).width() < 992) {
    $(".hours-container").removeClass('col-sm-6');
    $(".map-container").removeClass('col-sm-4');
    $(".hours-container").addClass('col-sm-12');
    $(".map-container").addClass('col-sm-12');
    // $(".hours-container").toggleClass('col-sm-1');
    // $(".map-container").toggleClass('col-sm-1');
  }
  else {
    $(".hours-container").removeClass('col-sm-12');
    $(".map-container").removeClass('col-sm-12');
    $(".hours-container").addClass('col-sm-6');
    $(".map-container").addClass('col-sm-4');
  //   // $(".hours-container").toggleClass('col-sm-1');
  //   // $(".map-container").toggleClass('col-sm-1');
  }
}
$(window).on("resize", resize);
resize();
