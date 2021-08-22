import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  //@ts-ignore
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(401).send();
  }
};
