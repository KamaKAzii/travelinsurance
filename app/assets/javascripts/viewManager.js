(function ($) {
  $.fn.viewManager = function() {
    this.each(function() {

      var self = $(this);

      var utils = {
        initViewContainer: function() {
          if (self.children("div.view").length < 1) {
            $view = $("<div>")
              .addClass("view")
              .addClass("hidden");
            self
              .append($view)
              .data("view", $view);
          }
        }

      };

      self
        .on("renderView", function(e, viewModel) {

          utils.initViewContainer();

          switch (viewModel.modelName)
          {
            case "home":
              self.triggerHandler("renderViewHome", viewModel);
              break;
          }
        })
        .on("renderViewHome", function(e, viewModel) {
          var $whereInput
            = mg.textInput("where", "Done", "countries", "Where are you going?");
          var $leavingInput
            = mg.textInput("leaving", "Done", "leaving", "When are you leaving?");
          var $returningInput
            = mg.textInput("returning", "Done", "returning", "When are you returning?");
          var $agesInput
            = mg.textInput("ages", "Done", "ages", "How old are your travellers?");
          var $submit
            = mg.button("button", "Get a quote");

          var $view = self.data("view");
          $view.append($whereInput);
          $view.append($leavingInput);
          $view.append($returningInput);
          $view.append($agesInput);
          $view.append($submit);

          // Need to wrap this in a timeout function.
          setTimeout(function() {
            $view.removeClass("hidden");
          }, 1);
        });
    });
  };
}(jQuery));
