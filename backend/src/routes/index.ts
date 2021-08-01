import express from "express";
import cargoRouter from "./cargo";
import userRouter from "./user";

const router = express.Router();

router.use("/cargo", cargoRouter);
router.use("/", userRouter);

export default router;
