import React from "react";
import '../css/home.css';
import bhu from '../img/bhu.jpeg';

const Homepage = () => {
  

  return(
    <>
      <div className="home-container">
        <div className="home-container-0">
          <div className="home-item-image">
            <img src={bhu} alt="bhu"/>
          </div>
          <div className="home-item-image-heading">
            WELCOME TO IIT BHU
          </div>
        </div>
        <div className="home-container-1">
          <div className="home-item">
            <div className="home-heading">
              About the Institute
            </div>
            <div className="home-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolor, adipisci cum accusantium, sunt rem maiores voluptatibus quam, illo vitae repudiandae quod nulla ipsam quae commodi tempora nostrum nam ullam.
            </div>
          </div>
          <div className="home-item">
            <div className="home-heading">
              Discussion Forum
            </div>
            <div className="home-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolor, adipisci cum accusantium, sunt rem maiores voluptatibus quam, illo vitae repudiandae quod nulla ipsam quae commodi tempora nostrum nam ullam.
            </div>
          </div>
        </div>
        <div className="home-container-2">
          <div className="home-item">
            <div className="home-content-text">
              <div className="home-heading">
                Cops IIT-BHU
              </div>
              <div className="home-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolor, adipisci cum accusantium, sunt rem maiores voluptatibus quam, illo vitae repudiandae quod nulla ipsam quae commodi tempora nostrum nam ullam.
              </div>
            </div>
            <div className="home-content-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyGOlG7pQC-Cygbw0Wz-j4gxJKQATwXXSWLg&usqp=CAU" alt="tech" />
            </div>
          </div>
          <div className="home-item">
            <div className="home-content-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyGOlG7pQC-Cygbw0Wz-j4gxJKQATwXXSWLg&usqp=CAU" alt="tech" />
            </div>
            <div className="home-content-text">
              <div className="home-heading">
                Cops IIT-BHU
              </div>
              <div className="home-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolor, adipisci cum accusantium, sunt rem maiores voluptatibus quam, illo vitae repudiandae quod nulla ipsam quae commodi tempora nostrum nam ullam.
            </div>
            </div>
          </div>
          <div className="home-item">
            <div className="home-content-text">
              <div className="home-heading">
                KashiYatra
              </div>
              <div className="home-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolor, adipisci cum accusantium, sunt rem maiores voluptatibus quam, illo vitae repudiandae quod nulla ipsam quae commodi tempora nostrum nam ullam.
              </div>
            </div>
            <div className="home-content-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyGOlG7pQC-Cygbw0Wz-j4gxJKQATwXXSWLg&usqp=CAU" alt="tech" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Homepage;
