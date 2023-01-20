const Sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection');

const Appointment_Model = dbConnection.define('appointment', {

    date : Sequelize.DATE,
    startTime : Sequelize.DATE,
    endTime : Sequelize.DATE,
    meetlink:Sequelize.STRING,
    doctorMessage : Sequelize.STRING,
    status : Sequelize.ENUM(['pending','approved' , 'expired' ,'rejected'])
});

module.exports = Appointment_Model;