import express from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";

const router = express.Router();

router.post("/", createUser);
router.get("/users", getAllUsers);

export default router;
