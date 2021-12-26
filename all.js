$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".dropdown-md-block").toggleClass("active");
});
$(".cart-like").click(function(e) {
  e.preventDefault();
  var target = e.target;
  $(target).toggleClass("fa-heart")
  $(target).toggleClass("fa-heart-o")
 });