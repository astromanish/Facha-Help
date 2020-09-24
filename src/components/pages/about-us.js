import React from "react";
import Manish from "./../img/manish.jpg";
import Adarsh from "./../img/adarsh.jpg";
import "./../css/about-us.css";

const AboutUs = () => {
  return (
    <>
      <>
        <div className="about-header">
          <div className="about-each">
            <div className="about-image">
              <div>
                <img src={Manish} alt="Manish Image" height={200} width={200} />
              </div>
            </div>
            <div className="about-details">
              <div className="about-name">
                <span>Manish Singh</span>
                <hr />
              </div>
              <div className="about-links">
                <div>
                  <a href="https://www.facebook.com/astromanishsingh">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com/astromanishsingh?igshid=n23keo63j0rm">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/manish-singh-580736178/">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/astromanish">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-each">
            <div className="about-image">
              <div>
                <img src={Adarsh} alt="Adarsh Image" height={200} width={200} />
              </div>
            </div>
            <div className="about-details">
              <div className="about-name">
                <span>Adarsh Tripathi</span>
                <hr />
              </div>
              <div className="about-links">
                <div>
                  <a href="https://www.facebook.com/adarsh.tripathi.5855594/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>{" "}
                </div>
                <div>
                  <a href="https://www.instagram.com/adarsh._.tripathi._/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/adarsh-tripathi-0a5a24191/">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/rush-tea">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutUs;
