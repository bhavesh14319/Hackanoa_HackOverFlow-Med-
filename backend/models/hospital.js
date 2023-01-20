const Sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const Hospital_Model = dbConnection.define("hospital", {
  name: Sequelize.STRING,
  hospitalCode: Sequelize.STRING,
  contactNumber: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  pincode: Sequelize.STRING,
  address: Sequelize.STRING,
  geolocation: Sequelize.STRING,
  noOfBeds: Sequelize.INTEGER,
  noOfDoctors: Sequelize.INTEGER,
});

module.exports = Hospital_Model;