(function ($) {
  $.fn.extend({
    breadcrumb: function ($appendTo, opt) {
      opt = $.extend({
        // Default opts here
      }, opt);

      utils = {
        myUtil: function() {
          alert("myUtil ran");
        }
      };

      return this.each(function() {

        var $ul = $("<ul>")
          .addClass("breadcrumb")
          .addClass("icon");

        var $travelLi = $("<li>")
          .html("&#xf072;")
          .appendTo($ul);
        var $quoteLi = $("<li>")
          .html("&#xf10e;")
          .appendTo($ul);
        var $peopleLi = $("<li>")
          .html("&#xf03a;")
          .appendTo($ul);
        var $paymentLi = $("<li>")
          .html("&#xf09d;")
          .appendTo($ul);

        $appendTo.append($ul);

        return $ul;

      });
    }
  });
})(jQuery);
