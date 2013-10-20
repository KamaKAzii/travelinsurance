$(function() {
  FastClick.attach(document.body);
});

var mobileBrowserAddressBarHeight = 60;
$(document).ready(function() {
  var targetHeight = $(window).height() + mobileBrowserAddressBarHeight;
  $(".site-wide-container").css("min-height", targetHeight + "px");

  $("header").breadcrumb();
});
