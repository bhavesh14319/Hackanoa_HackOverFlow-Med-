const Sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const GenericMedical_Model = dbConnection.define("genericMedical", {
  name: Sequelize.STRING,
  medicalCode: Sequelize.STRING,
  contactNumber: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  pincode: Sequelize.STRING,
  address: Sequelize.STRING,
  geolocation: Sequelize.STRING,
  startTime: Sequelize.STRING,
  endTime : Sequelize.STRING
});

module.exports = GenericMedical_Model;