var express = require('express');
var router = express.Router();

const ctrlHome = require("../controllers/homepage");
const ctrlBlog = require("../controllers/blog");
const ctrlAbout = require("../controllers/about");
const ctrlWorks = require("../controllers/works");
const ctrlAuth = require("../controllers/auth");

/* GET home page. */
router.get("/", ctrlHome.getIndex);

router.get("/blog", ctrlBlog.getBlog);

router.get("/works", ctrlWorks.getWorks);
router.post("/contact", ctrlWorks.sendEmail);

router.get("/about", ctrlAbout.getAbout);

router.post("/login", ctrlAuth.authorization);

module.exports = router;
