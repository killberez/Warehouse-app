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
  const { id, isAdmin, login, password } = user;
  const token = await generateAccessToken({ id, isAdmin, login, password });
  return res.json({ user: { id, isAdmin, login, password, token } });
};

const getUserToken = async function (req: Request, res: Response) {
  const userLogin = req.body.login;
  const userPassword = req.body.password;
  const user = await User.findOne({ where: { login: userLogin } });
  //@ts-ignore
  const { id, isAdmin, login, password } = user;
  if (user?.password === userPassword) {
    const token = await generateAccessToken({ id, isAdmin, login, password });
    return res.json(token);
  } else {
    return null;
  }
};

const getAllUsers = async function (req: Request, res: Response) {
  const users = await User.findAll();
  return res.json(users);
};

export { createUser, getAllUsers, getUserToken };
