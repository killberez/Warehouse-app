import User from "../models/user";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { BeforeFindAfterExpandIncludeAll } from "sequelize-typescript";
import jwt from "jsonwebtoken";
import { IUser } from "../models/user";

dotenv.config();

function generateAccessToken(user: IUser) {
  return jwt.sign(user, process.env.TOKEN_SECRET!);
}

const createUser = async function (req: Request, res: Response) {
  const user = await User.create(req.body);
  const { id, isAdmin } = user;
  const token = await generateAccessToken({ id, isAdmin });
  return res.json({ user: { id, isAdmin, token } });
};

const getUserToken = async function (req: Request, res: Response) {
  const userId = req.body.id;
  const user = await User.findOne({ where: { id: userId } });
  //@ts-ignore
  const { id, isAdmin } = user;
  const token = await generateAccessToken({ id, isAdmin });
  return res.json(token);
};

const getAllUsers = async function (req: Request, res: Response) {
  const users = await User.findAll();
  return res.json(users);
};

export { createUser, getAllUsers, getUserToken };
