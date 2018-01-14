const nodemailer = require("nodemailer");
const config = require("../config/config.json");
const http = require("request");

module.exports.getWorks = (req, res, next) => {
  const pathAPI = "/api/work";
  const requestOptions = { url: apiOptions.server + pathAPI, method: "GET" };
  let sendObj = { title: "Мои работы" };
  http(requestOptions, function (error, response, body) {
    res.render("pages/works",Object.assign(sendObj, JSON.parse(body)));
  })
};

module.exports.sendEmail = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.redirect("/works?msg=Пожалуйста, заполните все поля");
  }

  const transporter = nodemailer.createTransport(config.mail.smtp);

  const mailOptions = {
    from: `"Администратор сайта-портфолио" <alena.safyannikova@yandex.ru>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: ` Пожалуйста, свяжитесь со мной! \n\n Имя: "${
      req.body.name
    }",\n e-mail: <${
      req.body.email
    }>,\n сообщение: "${req.body.message.trim()}"`
  };

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Сервер готов принять сообщение");
    }
  });

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return res.send(
        "/works?msg=При отправке письма произошла ошибка " + error
      );
      console.log(error);
    }
    res.send("/works?msg=Сообщение отправлено");
  });
};
