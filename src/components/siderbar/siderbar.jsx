import React from "react";
import "../../styles.css";

function Siderbar() {
  return (
    <div className="siderbar">
      <h2>OVERVIEW</h2>
      <ul>
        <li>project list</li>
        <li>project list</li>
        <li>project list</li>
      </ul>
      <div className="siderbar-button">
        <button className="btn-settings">settings</button>
        <button className="btn-logout">logout</button>
      </div>

    </div>
  );
}

export default Siderbar;
