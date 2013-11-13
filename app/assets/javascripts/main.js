$(function() {
  FastClick.attach(document.body);
});

ti.utils = {
  hideBrowserAddressBar: function() {
    setTimeout(function(){
      window.scrollTo(0, 0);
      }, 0);
  }
};

$(document).ready(function() {
  // Deals with setting up page height and breadcrumb.
  ti.controller.initPage();

  // First controller action after breadcrumb is finished
  $("header").on("breadcrumbLoadAnimationFinished", function() {
    ti.controller.open();
  });

});
