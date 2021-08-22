import express from "express";
import {
  addCargo,
  getCargos,
  getCargoById,
} from "../controllers/cargo.controller";
import { getCargoByCustomerId } from "../controllers/cargo.controller";
import jwtMiddleware from "../middleware/jwtMiddleware";
import userMiddleware from "../middleware/userMiddleware";

const router = express.Router();

router.get("/customer", getCargoByCustomerId);
router.use(userMiddleware);
router.get("/cargos", getCargos);
router.get("/:id", getCargoById);
router.use(jwtMiddleware);
router.post("/", addCargo);

export default router;
