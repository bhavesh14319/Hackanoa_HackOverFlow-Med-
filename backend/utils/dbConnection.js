const sequelize = require("sequelize");

const dbConnection = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);


dbConnection
  .authenticate()
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((err) => console.log("database connection error: " + err));

module.exports = dbConnection;
