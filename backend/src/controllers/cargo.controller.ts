import Cargo from "../models/cargo";
import User from "../models/user";
import { Request, Response } from "express";

const addCargo = async function (req: Request, res: Response) {
  const token = req.headers.authorization?.split(" ")[1];
  const user = await User.findOne({
    where: {
      jwt: token,
    },
  });
  if (user?.isAdmin == true) {
    const cargo = await Cargo.create(req.body);
    return res.json(cargo);
  } else {
    console.log("no access");
    return;
  }
};

const getAll = async function (req: Request, res: Response) {
  if (req.body.isAdmin) {
    const cargos = await Cargo.findAll();
    return res.json(cargos);
  } else {
    console.log("no access");
    return;
  }
};

const getCargoById = async function (req: Request, res: Response) {
  const { id } = req.params;
  const cargo = await Cargo.findOne({ where: { id: id } });
  return res.json(cargo);
};

const getCargoByCustomerId = async function (req: Request, res: Response) {
  const customerId = req.body.customerId;
  const cargos = await Cargo.findAll({ where: { customerId: customerId } });
  return res.json(cargos);
};

export { addCargo, getAll, getCargoById, getCargoByCustomerId };
