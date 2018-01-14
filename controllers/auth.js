const http = require("request");
const apiOptions = {
  server: "92.53.105.148"
};

module.exports.getAuth = (req, res) => {
  res.render("pages/index", {
    title: "Портфолио - Главная страница",
    msg: req.query.msg
  });
};

module.exports.authorization = (req, res) => {
  if (!req.body.login || !req.body.password) {
    return res.redirect("/index?msg=Все поля обязательны к заполнению!");
  };
  const pathApi = "/api/auth";
  const requestOptions = { 
    url: apiOptions.server + pathApi, 
    method: "POST", 
    json: { 
      name: req.body.name, 
      password: req.body.password, 
      chekbox: req.body.chekbox, 
      radio: req.body.radio 
    } 
  };

  http(requestOptions, function(error, response, body) {
    if (body.status === "err") {
      return res.redirect(`/?msg=${body.message}`);
    }
    req.session.isAdmin = true;
    res.redirect("/admin");
  });
};
