import React from "react";
import "./css/clubs.css";

const Clubs = () => {
  return (
    <div className="club-container">
      <p>
        The Students’ Gymkhana manages all student activities at the campus
        thorough its executive and non-executive wings, the Gymkhana councils
        and the Students’ Parliament respectively. The Director of the Institute
        is the patron of the Gymkhana while the Dean of Student Affairs (DoSA)
        acts as the ex-officio President of the Gymkhana.
      </p>
      <p>
        The Gymkhana consists of 5 Councils namely, the{" "}
        <span className="council-name">Cultural Council</span>, the
        <span className="council-name"> Science and Technology Council</span>,
        the <span className="council-name">Film and Media Council</span>, the{" "}
        <span className="council-name">Sports Council</span> and the{" "}
        <span className="council-name">Social Service Council</span>. Each
        council is headed by a General Secretary and 2 Joint General Secretaries
        elected by the Councils and a faculty member serving as the Counsellor.
      </p>
      <div className="council-club">
        <div className="council">
          <h4 className="counsil-heading">Cultural</h4>
          <ul className="club-list">
            <li className="club-item">Dance (DFZ)</li>
            <li className="club-item">Masquerades</li>
            <li className="club-item">Literary</li>
            <li className="club-item">Western Music</li>
            <li className="club-item">Indian Music</li>
            <li className="club-item">Fine Arts</li>
          </ul>
        </div>
      </div>
      <div className="council-club">
        <div className="council">
          <h4 className="counsil-heading">Science and Technology</h4>
          <ul className="club-list">
            <li className="club-item">Aeromodeling</li>
            <li className="club-item">Astronomy</li>
            <li className="club-item">Sustainbility and Innovation</li>
            <li className="club-item">Programming</li>
            <li className="club-item">Robotics</li>
            <li className="club-item">Business</li>
            <li className="club-item">Automation</li>
          </ul>
        </div>
      </div>
      <div className="council-club">
        <div className="council">
          <h4 className="counsil-heading">Film and Media</h4>
          <ul className="club-list">
            <li className="club-item">Media</li>
            <li className="club-item">Cinematography</li>
            <li className="club-item">Outreach</li>
            <li className="club-item">Photography</li>
            <li className="club-item">Animation</li>
            <li className="club-item">Creative Design</li>
          </ul>
        </div>
      </div>
      <div className="council-club">
        <div className="council">
          <h4 className="counsil-heading">Games and Sports</h4>
          <ul className="club-list">
            <li className="club-item">Aquatics</li>
            <li className="club-item">Athletics</li>
            <li className="club-item">Badminton</li>
            <li className="club-item">Basketball</li>
            <li className="club-item">Boxing</li>
            <li className="club-item">Chess</li>
            <li className="club-item">Cricket</li>
            <li className="club-item">Football</li>
            <li className="club-item">Handball</li>
            <li className="club-item">Hockey</li>
            <li className="club-item">Kabaddi</li>
            <li className="club-item">Kho Kho</li>
            <li className="club-item">Squash</li>
            <li className="club-item">Table Tennis</li>
            <li className="club-item">Taekando</li>
            <li className="club-item">Tennis</li>
            <li className="club-item">Vollyball</li>
            <li className="club-item">Weightlifting</li>
          </ul>
        </div>
      </div>
      <div className="council-club">
        <div className="council">
          <h4 className="counsil-heading">Social and Services</h4>
          <ul className="club-list">
            <li className="club-item">Health and Hygeine</li>
            <li className="club-item">Social Projects</li>
            <li className="club-item">Sahyog</li>
            <li className="club-item">Kashi Utkarsh</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
