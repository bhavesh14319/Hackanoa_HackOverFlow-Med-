const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const dbConnection = require("./utils/dbConnection");

app.set("view engine", "ejs");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());
app.use(express.static("public"));

const Routes = require("./utils/allRoutes");
// // Api routes
app.use(Routes.doctor_Routes);
app.use(Routes.patient_Routes);
app.use(Routes.appointment_Routes);
app.use(Routes.vital_Routes);
app.use(Routes.prescription_Route);
app.use(Routes.hospital_Route);
app.use(Routes.medical_Route);

//creating routes


require('./utils/allModelRelationship');
const syncDb = async () => {
  await dbConnection.sync();
};

syncDb();

app.listen(process.env.PORT , () => {
  console.log(`server is running on ${process.env.PORT}`);
});
