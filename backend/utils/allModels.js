const models = {
    Patient_Model : require("../models/patient"),
    Doctor_Model : require("../models/doctor"),
    Appointment_Model : require('../models/appointment'),
    Prescription_Model : require('../models/prescription'),
    Vital_Model : require('../models/vital'),
    Hospital_Model : require('../models/hospital'),
    Medical_Model : require('../models/medical')
};

module.exports = models;