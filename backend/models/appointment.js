const Sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection');

const Appointment_Model = dbConnection.define('appointment', {

    date : Sequelize.DATE,
    startTime : Sequelize.DATE,
    endTime : Sequelize.DATE,
    confirmed : {
      type:Sequelize.BOOLEAN,
      default:0
    },
    meetlink:Sequelize.STRING,
    doctorMessage : Sequelize.STRING
});

module.exports = Appointment_Model;