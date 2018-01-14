const http = require("request");

const apiOptions = {
  server: "92.53.105.148"
};

module.exports.getBlog = (req, res, next) => {
  const pathApi = "/api/blog";
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "GET"
  };
  const sendObj = { title: "Блог - статьи по веб-разработке" };
  http(requestOptions, function(error, response, body) {
    res.render("pages/blog", Object.assign(sendObj, JSON.parse(body)));
  });
};
