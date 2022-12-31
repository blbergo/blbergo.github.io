//hide other tabs
$(document).ready(function () {
  $(".bio-content").hide();
  //default tab
  $("#general-content").show();
});

$("li").click(function () {
  $("li").removeClass("is-active");
  $(this).addClass("is-active");

  var id = this.id;

  $(".bio-content").hide();
  $("#" + id + "-content").show();
});
