import React from "react";
import { Link } from "react-router-dom";

import "../css/fests.css";

const Fests = () => {
  return (
    <div className="body-container">
      <div className="fests-links">
        <ul>
          <li>
            <Link to="/fests/kashiyatra">Kashiyatra</Link>
          </li>
          <li>
            <Link to="/fests/technex">Technex</Link>
          </li>
          <li>
            <Link to="/fests/spardha">Spardha</Link>
          </li>
          <li>
            <Link to="/fests/fmc-weekend">FMC Weekend</Link>
          </li>
          <li>
            <Link to="/fests/dept-fest">Departmental Fests</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fests;
