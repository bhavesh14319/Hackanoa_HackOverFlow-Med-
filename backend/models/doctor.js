const Sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const Doctor_Model = dbConnection.define("doctor", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  regNo: Sequelize.STRING,
  DOB: Sequelize.DATE,
  mobileNumber: Sequelize.STRING,
  password: Sequelize.STRING,
  specialization: Sequelize.STRING,
  experience: Sequelize.STRING,
});

module.exports = Doctor_Model;
