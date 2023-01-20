const Sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection');

const Prescription_Model = dbConnection.define('prescription', {
    
    startDate : Sequelize.DATEONLY,
    endDate : Sequelize.DATEONLY,
    medicine : Sequelize.STRING,
    dailyfreq : Sequelize.STRING,
    doseage : Sequelize.STRING,
    instruction : Sequelize.STRING
});

module.exports = Prescription_Model;