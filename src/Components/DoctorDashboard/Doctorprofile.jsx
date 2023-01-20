import React from "react";
import "../DoctoDashboardCss/Doctorprofile.css"

function Doctorprofile() {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="profile-image"></div>

        <div className="profile-info">
          <h3 className="profile-name">Javed Ali</h3>
          <h3 className="profile-email">javedali1009@gmail.com</h3><hr></hr>
          <div className="profile-desc">
            <p><span>Username:</span> <span>javedali@281</span></p>
            <p><span>Mobile:</span> <span>5415689154</span></p>
            <p><span>Working At:</span> <span>alibaug Hospital</span></p>
            <p><span>Specialization:</span> <span>Cardiologist</span></p>
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

export default Doctorprofile;
