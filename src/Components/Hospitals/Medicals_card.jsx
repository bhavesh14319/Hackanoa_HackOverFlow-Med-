import React from "react";
import "./hospitals.css";

function MedicalCard(props) {
  return (
    <div>
      <div className="google_card">
        <div class="card">
          <iframe
            className="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3767.745838992304!2d72.87241691482411!3d19.20630028701321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674281458322!5m2!1sen!2sin"
          ></iframe>
          <div class="container">
            <h4>
              <b>{props.prop.name}</b><hr></hr>
            </h4>
            <div className="hospital_detail">
              <p>Address:{props.prop?.address}</p>
              <p>city:{props.prop?.city}</p>
              <p>pincode:{props.prop?.pincode}</p>
              <p>Opens at:{props.prop?.startTime}:</p>
              <p>Closes at:{props.prop?.endTime}</p>
              <p>Contact no.:{props.prop?.contactNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalCard;
