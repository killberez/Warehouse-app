const { Cargo, Test } = require("../models/models");

const addCargo = async function (req, res) {
  const {
    id,
    customer_id,
    total_weight,
    total_volume,
    nimber_of_boxes,
    condition,
    warehouse_place,
  } = req.body;
  const cargo = await Cargo.create({
    id,
    customer_id,
    total_weight,
    total_volume,
    nimber_of_boxes,
    condition,
    warehouse_place,
  });
  return res.json(cargo);
};

module.exports = addCargo;
