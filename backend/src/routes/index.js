const Router = require("express");
const router = new Router();
const workerRouter = require("./worker");
const customerRouter = require("./customer");

router.use("/worker", workerRouter);
router.use("/customer", customerRouter);

module.exports = router;
