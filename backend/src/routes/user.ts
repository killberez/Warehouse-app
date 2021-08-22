import express from "express";
import {
  createUser,
  getAllUsers,
  getUserToken,
} from "../controllers/user.controller";

const router = express.Router();

router.post("/", createUser);
router.post("/token", getUserToken);
router.get("/users", getAllUsers);

export default router;
