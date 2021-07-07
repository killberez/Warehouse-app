const Router = require("express");
const router = new Router();
const addName = require("../controllers/worker.controller");

router.post("/name", addName);
router.get("/all");
router.get("/cargo:id");
router.delete("/cargo:id");

module.exports = router;
