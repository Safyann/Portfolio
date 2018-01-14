module.exports.getIndex = (req, res, next) => {
  res.render("pages/index", { 
    title: "Портфолио - Главная страница", 
    msg: req.query.msg});
};
