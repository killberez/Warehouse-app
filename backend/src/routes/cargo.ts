import express from "express";
import {
  addCargo,
  getAll,
  getCargoById,
} from "../controllers/cargo.controller";
import { getCargoByCustomerId } from "../controllers/cargo.controller";

const router = express.Router();

router.post("/", addCargo);
router.get("/all", getAll);
router.get("/:id", getCargoById);
router.get("/customer/:id", getCargoByCustomerId);

export default router;
