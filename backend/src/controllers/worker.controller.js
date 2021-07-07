const { Cargo } = require("../models/models");

const addCargo = async function (req, res) {
  const {
    customer_id,
    total_weight,
    total_volume,
    nimber_of_boxes,
    condition,
    warehouse_place,
  } = req.body;
  const cargo = await Cargo.create({
    customer_id,
    total_weight,
    total_volume,
    nimber_of_boxes,
    condition,
    warehouse_place,
  });
  return res.json(cargo);
};

const getAll = async function (req, res) {
  const cargos = await Cargo.findAll();
  return res.json(cargos);
};

module.exports = { addCargo, getAll };
