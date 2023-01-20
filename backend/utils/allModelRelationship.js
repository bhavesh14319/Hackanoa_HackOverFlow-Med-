const dbConnection = require("./dbConnection");
const allModels = require("./allModels");

const All_Model_Relationship = async () => {
  
  try {
    await dbConnection.sync();
    console.log("Set Relation Sync Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = All_Model_Relationship();
