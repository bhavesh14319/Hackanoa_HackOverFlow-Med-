const dbConnection = require("./dbConnection");
const allModels = require("./allModels");

const All_Model_Relationship = async () => {
  

  try {


    allModels.Doctor_Model.hasMany(allModels.Appointment_Model);
    allModels.Appointment_Model.belongsTo(allModels.Doctor_Model);

    allModels.Patient_Model.hasMany(allModels.Appointment_Model);
    allModels.Appointment_Model.belongsTo(allModels.Patient_Model);

    allModels.Patient_Model.hasMany(allModels.Prescription_Model);
    allModels.Prescription_Model.belongsTo(allModels.Patient_Model);

    allModels.Doctor_Model.hasMany(allModels.Prescription_Model);
    allModels.Prescription_Model.belongsTo(allModels.Doctor_Model);

    allModels.Patient_Model.hasMany(allModels.Vital_Model);
    allModels.Vital_Model.belongsTo(allModels.Patient_Model);


    await dbConnection.sync();
    console.log("Set Relation Sync Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = All_Model_Relationship();
