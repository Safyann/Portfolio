module.exports = function() {
  var blur = (function() {
    var wrapper = document.querySelector(".contact-form__wrapper"),
      form = document.querySelector(".contact-form__blur");

    return {
      set: function() {
        var bgWidth = document.querySelector(".comments").offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCSS = form.style;

        blurCSS.backgroundSize = bgWidth + "px" + " " + "auto";
        blurCSS.backgroundPosition = posLeft + "px" + " " + posTop + "px";
      }
    };
  })();

  blur.set();

  window.onresize = function() {
    blur.set();
  };
};
