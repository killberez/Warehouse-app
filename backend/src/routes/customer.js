const Router = require("express");
const router = new Router();
const getAll = require("../controllers/customer.controller");

router.get("/cargos", getAll);

module.exports = router;
