(function ($) {
  $.fn.viewManager = function() {
    this.each(function() {

      var self = $(this);
      self
        .on("renderView", function(e, viewModel) {
          switch (viewModel.modelName)
          {
            case "home":
              self.triggerHandler("renderViewHome", viewModel);
              break;
          }
        })
        .on("renderViewHome", function(e, viewModel) {

          var $whereInput = mg.textInput("where", "DONE", "countries", "Where are you going?");
          var $leavingInput = mg.textInput("leaving", "DONE", "leaving", "When are you leaving?");
          var $returningInput = mg.textInput("returning", "DONE", "returning", "When are you returning?");
          var $agesInput = mg.textInput("ages", "DONE", "ages", "How old are your travellers?");
          self.append($whereInput);
          self.append($leavingInput);
          self.append($returningInput);
          self.append($agesInput);
        });
    });
  };
}(jQuery));
