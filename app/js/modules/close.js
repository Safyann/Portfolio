var $ = require("jquery");

module.exports = function() {
  var statusMessage = $(".contact-form__status");
  var close = $(".contact-form__status-btn");
  close.on("click", function(e) {
    e.preventDefault();
    statusMessage.removeClass("show");
  });
};
