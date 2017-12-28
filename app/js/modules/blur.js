module.exports = function() {
  var blur = (function() {
    const wrapper = document.querySelector(".comments"),
      blur = document.querySelector(".contact-form__wrapper"),
      bg = document.querySelector(".contact-form__blur");

    return {
      set: function() {
        var bgWidth = wrapper.offsetWidth,
          posLeft = -blur.offsetLeft,
          posTop = -blur.offsetTop,
          blurCSS = bg.style;

        // blurCSS.backgroundSize = bgWidth + "px" + " " + "auto";
        blurCSS.backgroundPosition = posLeft + "px" + " " + posTop + "px";
      }
    };
  })();

  blur.set();

  window.onresize = function() {
    blur.set();
  };
};
