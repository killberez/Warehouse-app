const { Cargo, Test } = require("../models/models");

const registerCargo = async function (req, res) {
  const { total_weight } = req.body;
  const cargo = await Cargo.create({ total_weight });
  return res.json(cargo);
};

const addName = async function (req, res) {
  const { name, lastName } = req.body;
  const test = await Test.create({ name, lastName });
  return res.json(test);
};

module.exports = addName;
