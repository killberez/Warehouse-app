import jwt from "jsonwebtoken";
import { IUser } from "../models/user";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send();
  }

  const user = jwt.verify(token!, process.env.TOKEN_SECRET!) as IUser;
  //@ts-ignore
  req.user = user;
  next();
};
