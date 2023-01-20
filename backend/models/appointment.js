const Sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const {redableDateTime} = require('../utils/date_time_helper');

const Appointment_Model = dbConnection.define("appointment", {
  date: Sequelize.DATE,
  startTime: Sequelize.DATE,
  endTime: Sequelize.DATE,
  meetlink: Sequelize.STRING,
  doctorMessage: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM(["pending", "approved", "expired", "rejected"]),
    default: "pending",
  },
  redabledateTime: {
    type: Sequelize.VIRTUAL,
    get() {
      const DateTime = this.getDataValue("date");
      return DateTime ? redableDateTime({ userDateTime: DateTime }) : null;
    },
  },

  redableStartDateTime: {
    type: Sequelize.VIRTUAL,
    get() {
      const startDateTime = this.getDataValue("startTime");
      return startDateTime
        ? redableDateTime({ userDateTime: startDateTime })
        : null;
    },
  },
  redableEndDateTime: {
    type: Sequelize.VIRTUAL,
    get() {
      const endDateTime = this.getDataValue("endTime");
      return endDateTime ? redableDateTime({ userDateTime: endDateTime }) : null;
    },
  },
});

module.exports = Appointment_Model;
