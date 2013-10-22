(function ($) {
  $.fn.extend({
    breadcrumb: function (opt) {
      opt = $.extend({
        isPageLoad: true
      }, opt);
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

            $.each($lis, function(index, $li) {
              $li.css("left", index * 25 + "%");
            });

            if (opt.isPageLoad) {
              var $logo = $("<div>")
                .addClass("logo")
                .css("top", "5px");

              self.append($logo);
              self.data("logo", $logo);

              var bodyHeight = $("body").height();
              $.each($lis, function(index, $li) {
                $li.css("top", bodyHeight / 2 + "px");
              });
            }

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

            if (opt.isPageLoad) {
              setTimeout(function() {
                self.triggerHandler("animateFromPageLoadState");
              }, 2000);
            } else {
              self.triggerHandler("addBaseEvents");
            }
          })
          .on("animateFromPageLoadState", function() {
            self.triggerHandler("animateLogo", [true]);
            $.each(self.data("crumbs"), function(index, $li) {
              $li
                .delay(index * 100)
                .animate({
                  top: "-5px"
                }, {
                  duration: 800,
                  done: function() {
                    $(this).animate({
                      top: "0px"
                    }, {
                      duration: 100
                    });
                  }
                }
              );
              self.triggerHandler("addBaseEvents");
            });
          })
          .on("animateLogo", function(e, animateOut) {
            var $logo = self.data("logo");
            var target = animateOut ? -60 : 60;
            $logo.animate({
              top: $logo.position().top + target + "px",
              opacity: 0
            }, {
              duration: 1000
            });
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
