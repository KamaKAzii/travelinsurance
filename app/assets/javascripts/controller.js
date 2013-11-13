var ti = {};
ti.controller = {

  initPage: function() {
    var mobileBrowserAddressBarHeight = 60;
    var targetHeight = $(window).height() + mobileBrowserAddressBarHeight;
    $(".site-wide-container").css("min-height", targetHeight + "px");
    $("header").breadcrumb();
    $("section").viewManager();
  },

  open: function() {
    var homeViewModel = {
      modelName: "home"
    };
    $("section").triggerHandler("renderView", homeViewModel);
  }

};
