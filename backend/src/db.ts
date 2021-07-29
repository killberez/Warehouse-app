import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    models: [__dirname + "/models"],
  }
);
