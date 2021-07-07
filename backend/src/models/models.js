const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Worker = sequelize.define("worker", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Customer = sequelize.define("customer", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  role: { type: DataTypes.STRING, defaultValue: "CUSTOMER" },
});

const Cargo = sequelize.define("cargo", {
  customer_id: { type: DataTypes.INTEGER },
  total_weight: { type: DataTypes.INTEGER },
  total_volume: { type: DataTypes.INTEGER },
  nimber_of_boxes: { type: DataTypes.INTEGER },
  condition: { type: DataTypes.STRING },
  warehouse_place: { type: DataTypes.STRING },
});

Customer.hasMany(Cargo);
Cargo.belongsTo(Customer);

module.exports = {
  Worker,
  Customer,
  Cargo,
};
