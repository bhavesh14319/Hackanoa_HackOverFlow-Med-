const Sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const Vitals_Model = dbConnection.define("vitals", {
  date : Sequelize.DATE,
  sweating: Sequelize.BOOLEAN,
  breathlessness: Sequelize.BOOLEAN,
  continuous_feel_of_urine: Sequelize.BOOLEAN,
  bladder_discomfort: Sequelize.BOOLEAN,
  burning_micturition: Sequelize.BOOLEAN,
  foul_smell_of_urine: Sequelize.BOOLEAN,
  constipation: Sequelize.BOOLEAN,
  vomiting: Sequelize.BOOLEAN,
  toxic_look_typh_os: Sequelize.BOOLEAN,
  belly_pain: Sequelize.BOOLEAN,
  skin_rash: Sequelize.BOOLEAN,
  continuous_sneezing: Sequelize.BOOLEAN,
  pus_filled_pimples: Sequelize.BOOLEAN,
  blackheads: Sequelize.BOOLEAN,
  scurring: Sequelize.BOOLEAN,
  shivering: Sequelize.BOOLEAN,
  watering_from_eyes: Sequelize.BOOLEAN,
  red_spots_over_body: Sequelize.BOOLEAN,
  swelling_joints: Sequelize.BOOLEAN,
  painful_walking: Sequelize.BOOLEAN,
  movement_stiffness: Sequelize.BOOLEAN,
  predicted_disease : Sequelize.STRING
});

module.exports = Vitals_Model;