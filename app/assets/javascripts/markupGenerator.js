var mg = {
  textInput: function(classesString, buttonText, name, placeholder) {
    var $containerDiv = $("<div>")
      .attr({
        "class": classesString
      });
    var $input = $("<input>")
      .attr({
        "placeholder": placeholder,
        "name": name
      });
    var $button = $("<button>")
      .html(buttonText);

    $containerDiv
      .append($input)
      .append($button);

    return $containerDiv;
  }
};
