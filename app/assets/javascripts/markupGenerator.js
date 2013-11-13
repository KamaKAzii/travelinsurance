var mg = {
  textInput: function(classesString, buttonText, name, placeholder) {
    var $containerDiv = $("<div>")
      .attr({
        "class": "text " + classesString
      });
    var $input = $("<input>")
      .attr({
        "placeholder": placeholder,
        "name": name,
        "type": "text"
      });
    var $button = $("<button>")
      .html(buttonText);

    // Hookup events
    $input
      .on("focus", function() {
        $containerDiv.addClass("active");
      })
      .on("blur", function() {
        $containerDiv.removeClass("active");
      });
    $button
      .on("click", function(e) {
        $input.blur();
        e.preventDefault();
      });

    $containerDiv
      .append($input)
      .append($button);

    return $containerDiv;
  },
  button: function(classesString, text) {
    var $containerDiv = $("<div>")
      .attr({
        "class": "action " + classesString
      });
    var $button = $("<button>")
      .html(text);

    $containerDiv
      .append($button);

    return $containerDiv;
  }
};
