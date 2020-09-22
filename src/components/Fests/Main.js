import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Fests.css';

const Fests = () => {
    return(
        <>
        <div className="fests-links fest-container">
                <ul>
                    <li><Link to="/fests/kashiyatra">Kashiyatra</Link></li>
                    <li><Link to="/fests/technex">Technex</Link></li>
                    <li><Link to="/fests/spardha">Spardha</Link></li>
                    <li><Link to="/fests/fmc">FMC Weekend</Link></li>
                    <li><Link to="/fests/dptfest">Departmental Fests</Link></li>
                </ul>
        </div>
        
        </>
    )
} 

export default Fests