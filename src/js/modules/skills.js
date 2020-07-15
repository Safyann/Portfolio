var $ = require("jquery");

module.exports = function() {
  var animateSvg = (function() {
    var checkDistance = function(scrollTop, elem) {
      var offset = elem.offset().top;
      var windowMargin = Math.ceil($(window).height() / 3);
      var topBorder = offset - scrollTop - windowMargin;
      var bottomEdge = elem.outerHeight(true) + offset;
      var bottomBorder = scrollTop + windowMargin - bottomEdge;

      return topBorder <= 0 && bottomBorder <= 0;
    };

    return {
      init: function() {
        $(window).on("scroll", function() {
          var scrollTop = $(window).scrollTop();

          if (checkDistance(scrollTop, $(".circle"))) {
            var items = $(".circle"),
              counter = 0;

            function each() {
              var item = items.eq(counter),
                circleColored = item.find(".circle__second"),
                percent = circleColored.attr("data-circle"),
                strokeDasharray = 2 * Math.PI * 45 * percent / 100;

              circleColored.css("stroke-dasharray", strokeDasharray + " 282.6");

              counter++;

              setTimeout(each, 20);
            }

            each();
          }
        });
      }
    };
  })();

  animateSvg.init();
};
