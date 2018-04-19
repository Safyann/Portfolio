var $ = require("jquery");

module.exports = function() {
  var submitForm = function(e) {
    e.preventDefault();

    var form = $(e.target),
      url = form.attr("action"),
      data = form.serialize();

    var request = $.ajax({
      type: "POST",
      url: url,
      data: data,
      dataType: "JSON"
    });

    request.done(function(msg) {
      var mes = msg.mes,
        status = msg.status;
      if (status === "OK") {
        $(".contact-form__status").addClass("show");
        //alert (mes);
        //console.log(form[0]);
        form[0].reset();
      } else {
        alert(mes);
        form[0].reset();
      }
    });

    request.fail(function(jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
      form[0].reset();
    });
  };

  $("#form").on("submit", submitForm);
};
