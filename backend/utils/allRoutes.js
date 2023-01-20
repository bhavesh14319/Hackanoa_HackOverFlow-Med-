const All_Routes = {
    doctor_Routes :require("../routes/doctor"),
    patient_Routes :require("../routes/patient"),
    appointment_Routes : require('../routes/appointment'),
    vital_Routes : require('../routes/vitals'),
    prescription_Route : require('../routes/prescription'),
    hospital_Route : require('../routes/hospital'),
    medical_Route : require('../routes/medical')
};


module.exports = All_Routes;