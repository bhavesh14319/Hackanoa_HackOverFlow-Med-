const models = {
    Patient_Model : require("../models/patient"),
    Doctor_Model : require("../models/doctor"),
    Appointment_Model : require('../models/appointment'),
    Prescription_Model : require('../models/prescription'),
    Vital_Model : require('../models/vital')
};

module.exports = models;