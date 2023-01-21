import React from "react";
import "../DoctoDashboardCss/Doctorprofile.css"

function Patientprofilecard() {
  return (
    <div className="profile-card profile-card-2">
      <div className="profile-card-header">
        <div className="profile-image profile-image-2"></div>
        <div className="profile-info" >
          <h3 className="profile-name">Raju sharma</h3>
          <h3 className="profile-email">rajusharma1009@gmail.com</h3><hr></hr>
          <div className="profile-desc">
            <p><span>Username:</span> <span>raju@281</span></p>
            <p><span>Mobile:</span> <span>5415689154</span></p>
            <p><span>Addhar no:</span> <span>654155848987</span></p>
            <p><span>address</span> <span>B-23,ekfhuei ishucv uibe ube</span></p>
            <p><span>DOB</span> <span>22 july 1999</span></p>
          </div>
        </div><hr></hr>
      </div>

      {/* <div className="profile-card-body">
        <ul className="status">
          <li>
            <span className="status-value">532</span>
            <span className="status-text">Posts</span>
          </li>

          <li>
            <span className="status-value">1.5m</span>
            <span className="status-text">Followers</span>
          </li>

          <li>
            <span className="status-value">423</span>
            <span className="status-text">Following</span>
          </li>
        </ul>

        <div className="action">
          <button className="btn btn-pink">Follow</button>
          <button className="btn btn-gray-outline">Message</button>
        </div>
      </div> */}
    </div>
  );
}

export default Patientprofilecard;
