import express from "express";
import cargoRouter from "./cargo";

const router = express.Router();

router.use("/cargo", cargoRouter);

export default router;
