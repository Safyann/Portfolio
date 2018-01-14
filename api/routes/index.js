var express = require("express");
var router = express.Router();

var multer = require("multer");
var upload = multer({ dest: "public/assets/images/upload" });

const ctrlBlog = require("../controllers/blog");
const ctrlSkills = require("../controllers/skills");
const ctrlWork = require("../controllers/work");
const ctrlUser = require("../controllers/user");

router.get("/blog", ctrlBlog.getArticles);
router.post("/blog", ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);
router.get("/skills", ctrlSkills.getSkills);
router.post("/skills", ctrlSkills.createSkill);
router.put("/skills", ctrlSkills.updateSkills);
router.delete("/skills/:id", ctrlSkills.deleteSkill);
router.get("/work", ctrlWork.getWork);
router.post("/work", upload.single("file"), ctrlWork.createWork);

router.post("/auth", ctrlUser.Auth);

module.exports = router;
