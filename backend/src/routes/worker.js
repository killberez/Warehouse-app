const Router = require("express");
const router = new Router();
const { addCargo, getAll } = require("../controllers/worker.controller");

router.post("/", addCargo);
router.get("/all", getAll);
router.get("/cargo:id");
router.delete("/cargo:id");

module.exports = router;
