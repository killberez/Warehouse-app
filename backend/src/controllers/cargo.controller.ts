import Cargo from "../models/cargo";
import User, { IUser } from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const addCargo = async function (req: Request, res: Response) {
  const cargo = await Cargo.create(req.body);
  return res.json(cargo);
};

const getCargos = async function (req: Request, res: Response) {
  //@ts-ignore
  const cargos = await Cargo.findAll();
  return res.json(cargos);
};

const getCargoById = async function (req: Request, res: Response) {
  const { id } = req.params;
  const cargo = await Cargo.findOne({ where: { id: id } });
  return res.json(cargo);
};

const getCargoByCustomerId = async function (req: Request, res: Response) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send();
  }
  const user = jwt.verify(token!, process.env.TOKEN_SECRET!) as IUser;
  const cargos = await Cargo.findAll({ where: { customerId: user.id } });
  return res.json(cargos);
};

// const getCargoByCustomerId = async function (req: Request, res: Response) {
//   const customerId = req.body.customerId;
//   console.log(customerId);
//   const cargos = await Cargo.findAll({ where: { customerId: customerId } });
//   return res.json(cargos);
// };

export { addCargo, getCargos, getCargoById, getCargoByCustomerId };
