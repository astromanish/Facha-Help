import React from 'react'

import './../css/explore-vns.css';

import Kachori from './../img/explore-vns/must-eat/kachori-sabji.webp';


const ExploreVns = () => {
    return (
        <div className="body-container">
            <h4 className="heading">Must Eat</h4>
            <div className="must-eat">
                <div className="must-eat-item">
                    <h4 className="sub-heading kachori">Kachori Sabzi</h4>
                    <img src={Kachori} />
                    <p className="must-eat-content kachori">Kachori sabji makes for the most popular Kaleva (breakfast) option in Benaras.
                         There are two different types of kachoris- badi and choti kachori.
                          Badi kachori is stuffed with masala made of lentils called dal ki pithi
                           and choti kachori is stuffed with a spicy potato mixture. Both of these 
                           kachoris are savoured with garam masala wali aloo ki sazi and desi ghee jalebi. What a way to start your day!</p>
                </div>
                <div className="must-eat-item">
                    <h4 className="sub-heading"></h4>
                    <img src="" />
                    <p></p>
                </div>
                <div className="must-eat-item">
                    <h4 className="sub-heading"></h4>
                    <img src="" />
                    <p></p>
                </div>
                <div className="must-eat-item">
                    <h4 className="sub-heading"></h4>
                    <img src="" />
                    <p></p>
                </div>
                <div className="must-eat-item">
                    <h4 className="sub-heading"></h4>
                    <img src="" />
                    <p></p>
                </div>
                <div className="must-eat-item">
                    <h4 className="sub-heading"></h4>
                    <img src="" />
                    <p></p>
                </div>
                <div className="must-eat-item">
                    <h4 className="sub-heading"></h4>
                    <img src="" />
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default ExploreVns;