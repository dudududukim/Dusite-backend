var express = require("express");
var router = express.Router();
const ctrl = require("./ctrl");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/api/getList", ctrl.data.visitors);
router.get("/api/getVisitorsList", ctrl.get.visitorsList);

router.post("/api/postVisitorsMsg", ctrl.post.visitorsMsg);

module.exports = router;
