(function ($) {
  $.fn.viewManager = function() {
    this.each(function() {

      var self = $(this);
      self
        .on("renderView", function(e, viewModel) {

          switch (viewModel.modelName)
          {
            case "home":
              self.triggerHandler("attachDomHome", viewModel);
              break;
          }
        })
        .on("renderViewHome", function(e, viewModel) {
          var $whereInput = mg.textInput("where", "DONE", "countries", "Where are you going?");
          self.data("currentDomElements", $whereInput);
          self.append($whereInput);
        });
    });
  };
}(jQuery));
