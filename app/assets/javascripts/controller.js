var ti = {};
ti.controller = {

  onWebsiteLoad: function() {
    var mobileBrowserAddressBarHeight = 60;
    var targetHeight = $(window).height() + mobileBrowserAddressBarHeight;
    $(".site-wide-container").css("min-height", targetHeight + "px");
  },

  initHomePage: function() {
    $("header").breadcrumb();
    // $("section").contentManager("home");
  }

};
