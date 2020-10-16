import React from "react";

import '../css/home.css';

import bhu from '../img/bhu.jpeg';

import fest from '../img/home/fest.jpg';
import academics from '../img/home/academics.jpg';
import gymkhana from '../img/home/gymkhana.jpg';
import varanasi from '../img/home/explore-vns.jpg';
import registration from '../img/home/registration.jpg';
import discussion from '../img/home/discussion-forum.png';

const Homepage = () => {
  return(
    <>
        <div className="home_main-image-container">
          <img src={bhu} alt="bhu"/>
          <h1>WELCOME TO IIT BHU</h1>
        </div>
        <div className="light-container">
            <h1 className="heading">
              What this site all about
            </h1>
            <p className="item-content">
              This website aims to help and guide new comers. On this website you will find guide for registration, forum for discussion with peers and seniors, college academics,
               festivals organized every year, gymkhana system of college which contains various clubs, gallery of photos, placement stats, exploration guide for BHU or 
               Varanasi in general and some miscellanous guide.
            </p>
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
        <div className="dark-container">
          <div className="site_item">
            <div className="site_item-body">
              <h1 className="heading">Registration Guide</h1>
              <p className="site_item-content">the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).</p>
            </div>
            <img className="site_item-image" src={registration}/>
          </div>
          <div className="site_item item-inverse">
            <div className="site_item-body">
              <h1 className="heading">Discussion Forum</h1>
              <p className="site_item-content">the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).</p>
            </div>
            <img className="site_item-image" src={discussion}/>
          </div>
          <div className="site_item">
            <div className="site_item-body">
              <h1 className="heading">Academics</h1>
              <p className="site_item-content">the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).</p>
            </div>
            <img className="site_item-image" src={academics}/>
          </div>
          <div className="site_item item-inverse">
            <div className="site_item-body">
              <h1 className="heading">Festivals</h1>
              <p className="site_item-content">the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).</p>
            </div>
            <img className="site_item-image" src={fest}/>
          </div>
          <div className="site_item">
            <div className="site_item-body">
              <h1 className="heading">Student Gymkhana</h1>
              <p className="site_item-content" >the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).</p>
            </div>
            <img className="site_item-image" src={gymkhana}/>
          </div>
          <div className="site_item item-inverse">
            <div className="site_item-body">
              <h1 className="heading">Explore Varanasi</h1>
              <p className="site_item-content">the Benaras Enginnering College (BENCO) in 1919, the College of Minning and Metllurgy
               (MINMET) in 1923 and the College of Technology (TECHNO) in 1932, as the constituent units of Banaras Hindu University.
               In 1968 three engineering colleges merged to form the Institute of Technology (IT) BHU. In 2012 IT (BHU) had been 
               converted to IIT (BHU).</p>
            </div>
            <img className="site_item-image" src={varanasi}/>
          </div>
        </div>
    </>
  )
};

export default Homepage;
