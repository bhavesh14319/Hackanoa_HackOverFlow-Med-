const Sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection');

const Patient_Model = dbConnection.define('patient', {

    firstName : Sequelize.STRING,
    lastName :Sequelize.STRING,
    aadharId : Sequelize.STRING,
    DOB : Sequelize.DATE,
    gender : Sequelize.ENUM('male', 'female', 'other') ,
    mobileNumber : Sequelize.STRING,
    city : Sequelize.STRING,
    state : Sequelize.STRING,
    pincode : Sequelize.STRING,
    address : Sequelize.STRING,

});

module.exports = Patient_Model;