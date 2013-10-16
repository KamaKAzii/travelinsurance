(function ($) {
  $.fn.extend({
    breadcrumb: function () {
      utils = {
        makeCrumbComplete: function($crumb) {
          $crumb.data("edit").show();
          $crumb.data("pointer").show();
        },
        makeCrumbNotComplete: function($crumb) {
          $crumb.data("edit").hide();
          $crumb.data("pointer").hide();
        }
      }

      this.each(function() {

        var self = $(this);
        self
          .on("init.breadcrumb", function() {

            var $lis = [];
            
            var $edit = $("<span>").html("&#xf044;").addClass("edit").hide();
            var $pointer = $("<span>").addClass("pointer").hide();

            var $ul = $("<ul>").addClass("breadcrumb").addClass("icon"); 
            var $travelLi = $("<li>").html("&#xf072;").appendTo($ul).data("position", 1);
            $lis.push($travelLi);
            var $quoteLi = $("<li>").html("&#xf10e;").appendTo($ul).data("position", 2);
            $lis.push($quoteLi);
            var $peopleLi = $("<li>").html("&#xf03a;").appendTo($ul).data("position", 3);
            $lis.push($peopleLi);
            var $paymentLi = $("<li>").html("&#xf09d;").appendTo($ul).data("position", 4);
            $lis.push($paymentLi);

            $.each($lis, function() {
              var $currentLi = $(this);
              var $currentEdit = $edit.clone();
              var $currentPointer = $pointer.clone();
              $currentLi.data("edit", $currentEdit); 
              $currentLi.data("pointer", $currentPointer); 
              $currentLi.append($currentEdit);
              $currentLi.append($currentPointer);
            });

            self.data("breadcrumb", $ul);
            self.data("crumbs", $lis);
            self.append($ul);

            self.triggerHandler("addBaseEvents");

          })
          .on("addBaseEvents", function() {
            // Lis
            $.each(self.data("crumbs"), function() {
                $(this).on("click", function() {
                  self.triggerHandler("moveToCrumb", this);
                });
              });
          })
          .on("moveToCrumb", function(e, crumb) {
            var $crumbs = self.data("crumbs");
            var $currentCrumb = $(crumb);
            var currentCrumbIndex = $currentCrumb.data("position") - 1;

            for (i = 0; i < $crumbs.length; i++) {
              utils.makeCrumbNotComplete($crumbs[i]);
            }

            for (i = 0; i <= currentCrumbIndex; i++) {
              utils.makeCrumbComplete($crumbs[i]);
            }

          });

        self.trigger("init.breadcrumb");
        return self;

      });
    }
  });
})(jQuery);
