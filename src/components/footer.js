import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="connect">
        <a href="#">
          <img
            height="25"
            className="connect-item"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg"
          />
        </a>
        <a href="#">
          <img
            height="25"
            className="connect-item"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg"
          />
        </a>
        <a href="#">
          <img
            height="25"
            className="connect-item"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
          />
        </a>
        <a href="#">
          <img
            height="25"
            className="connect-item"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
          />
        </a>
      </div>
      <p>Har Har Mahadev</p>
      <p>Sab Lite Hai!</p>
    </footer>
  );
};

export default Footer;
