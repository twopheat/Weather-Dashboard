$(document).ready(function() {
    $(".search").click(function() {
      $(this).addClass("active");
    });
    $(document).click(function(e) {
      if (!$(e.target).closest(".search").length) { //another way to do this is to stop event propagation
        $(".search.active").removeClass('active');
      }
    });
  });