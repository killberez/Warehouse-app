const { Sequelize } = require("sequelize");

const dbName = "Warehouse";
const dbUser = "postgres";
const dbPassword = "Zaebars13";
const dbHost = "localhost";
const dbPort = 5432;

module.exports = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
  port: dbPort,
});

// module.exports = new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         dialect: "postgres",
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//       }
//     );
