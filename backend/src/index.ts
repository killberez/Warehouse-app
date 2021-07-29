import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/index";
import { sequelize } from "./db";

const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
