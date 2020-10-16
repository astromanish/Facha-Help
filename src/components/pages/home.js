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
        <div className="light-container">
          <div className="item">
            <h1 className="heading">
              What this site all about
            </h1>
            <p className="item-content">
              This website aims to help and guide new comers. On this website you will find guide for registration, forum for discussion with peers and seniors, college academics,
               festivals organized every year, gymkhana system of college which contains various clubs, gallery of photos, placement stats, exploration guide for BHU or 
               Varanasi in general and some miscellanous guide.
            </p>
          </div>
          <div className="item">
            <h1 className="heading">
              History of Institute
            </h1>
            <p className="item-content">
              The Indian Insitute of Technology(Banaras Hindu University), Varanasi owes its existence to the farsighted 
              vision and relentless efforts of the founder Mahamana Pandit Madan Mohan Malsviya Ji. Three engineering and technological
              institutions were established viz. the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).
            </p>
          </div>
        </div>
        <div className="dark-container">
          <div className="image_item">
            <div className="image_item-body">
              <h1 className="light-heading">Registration Guide</h1>
              <p className="image_item-content"></p>
            </div>
            <img className="image_item-image"/>
          </div>
        </div>
      </div>
    </>
  )
};

export default Homepage;
