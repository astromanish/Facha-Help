import React from "react";
import { GiBigGear} from 'react-icons/gi';

const Technex = () => {
  return (
    <>
    <div className="technex-container">
        <div className="fest-title-top">
          <h4>Technex</h4>
          <div className="fest-item-top">
            <p>
              Welcome to one of the biggest techno-management fests of India,
              Technex organized by IIT (BHU), Varanasi.
            </p>
          </div>
        </div>      
      <div className="fest-items-container">
          <div className="fest-events">
            <div className="fest-events-item">
              <div className="fest-sub-item">
                <div className="fest-sub-icon" id="fest-icons">
                  <GiBigGear />
                </div>
                <div className="fest-content">
                  <div className="fest-subtitle">
                    <span>Technical Events</span>
                  </div>
                  <div className="fest-item">
                    <ul>
                      <li>
                        Ever wanted to drive your car NFS style. Make a RC car
                        complete with engine, shock absorbers and what not and compete
                        with some of the best teams, drifting your car with just the
                        right amount at just the right places to finish first and take
                        home a hefty prize money.
                      </li>
                      <li>
                        Those who are not satisfied with land vehicles, design a RC
                        air plane and watch it fly in the air performing some crazy
                        stunts.
                      </li>
                      <li>
                        If you are one of those who can spend sleepless nights with
                        your eyes glued to your laptop and fingers to your keyboard
                        trying to solve everyday life problems through algorithms then
                        technex is sure to impress you. If you are one of those coding
                        geeks, ‘ethical’ hackers, highly intellectual programmers,
                        then Technex has sufficient to quench your thirst and award
                        the deserving you with awesome prize money.
                    </li>
                    </ul>
                  </div>
                </div>
                </div>
                
              <div className="fest-sub-item">
                <div className="fest-sub-icon" id="fest-icons">
                  <GiBigGear />
                </div>
                <div className="fest-content">
                  <div className="fest-subtitle">Clutch (Gamers Fiesta)</div>
                  <div className="fest-item">
                    <p>
                      There is a saying:
                    <span>
                        “We haven’t inherited the world from our fore fathers, rather
                        we have borrowed it from our children’’
                    </span>
                    . Technex, in accordance with the above, hosts events where your
                    ideas can make this world a more better and sustainable place to
                    live.
                    </p>
                    <p>
                      Technex hosts a series of workshops on myriad of topics and
                      guest lectures of prominent personalities. Still don’t have
                      enough. Well there are a large number of informal events which
                      will never let you down.
                    </p>
                    <p>
                      Technex has an extensive coverage on online media attracting
                      sponsors, corporates, NGOs from all over the country. With a
                      diverse participation, Technex is a very good place for engaging
                      and interacting with the youth of the country.
                    </p>
                  </div>
                </div>
                </div>
                
              <div className="fest-sub-item">
                <div className="fest-sub-icon" id="fest-icons">
                  <GiBigGear />
                </div>
                <div className="fest-content">
                  <div className="fest-subtitle">
                    <span>Management Events</span>
                  </div>
                  <div className="fest-item">
                    <ul>
                      <li>
                        Technex has much more remaining for the management buffs out
                        there. Have a business idea that can make you next Richard
                        Branson? Share it and if the investors are impressed enough,
                        they may fund you. Assist a real company with a real problem
                        and take away hefty prize money in return. This section is for
                        those whose neurons get activated by case studies, formulating
                        financial models and playing with numbers.
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fest-sub-item">
                <div className="fest-sub-icon" id="fest-icons">
                  <GiBigGear />
                </div>
                <div className="fest-content">
                  <div className="fest-subtitle">
                    <span>Creatix</span>
                  </div>
                  <div className="fest-item">
                    <p>
                      Its all about art. Creativity has no bounds. Do you specialize
                      in poster making? Can you express yourself through a photograph?
                      Do you see yourself in movie making? If yes, Technex has
                      Creatrix for you giving you a platform to showcase your
                      photography skills, movie making and a lot more.
                    </p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
      </div>  
    </div>
      
    </>
  );
};

export default Technex;
