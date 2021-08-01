import User from "../models/user";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { BeforeFindAfterExpandIncludeAll } from "sequelize-typescript";

dotenv.config();

const jwt = require("jsonwebtoken");

function generateAccessToken(id: any) {
  return jwt.sign(id, process.env.TOKEN_SECRET);
}

const createUser = async function (req: Request, res: Response) {
  const token = await generateAccessToken({ id: req.body.id });
  const userJson = req.body;
  userJson.jwt = token;
  console.log(userJson);
  const user = await User.create(userJson);
  return res.json(user);
};

const getAllUsers = async function (req: Request, res: Response) {
  const users = await User.findAll();
  return res.json(users);
};

export { createUser, getAllUsers };
