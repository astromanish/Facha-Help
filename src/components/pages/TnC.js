import React from 'react';

import './../css/TnC.css';

const TnC = () => {
    return(
        <div className="body-container">
            <h1 className="page-heading">Terms and Conditions</h1>
            <p>We hereby declare our complete responsibity for the content of this website.
            Content shown on this website maybe just personal opinion and may seems wrong to someone. Main purpose of
            this website is to help and guide new comers to the best one can. Our intention is not to offend anyone views or 
            compete with anyone.</p>
            <h1 className="sub-heading">Contribute to this Website</h1>
            <p>In case you find any <span className="highlighted-text">grametical mistake</span> or <span className="highlighted-text">bug</span> on this website feel free to report that in feedback portal.
            You can also contribute to this website by <span className="highlighted-text">requesting new features</span> which you thinks must be included on 
            this website. For making request you can contact us on our instagram or linkedin ( Link of which is provided 
            in "About Us" tab).
            </p>
            <h1 className="sub-heading">Review</h1>
            <p>Please give your valuable review of this site in the feedback portal.</p>
            <h1 className="sub-heading">Content References</h1>
            <p>All content on this website are taken from following:</p>
            <ul>
                <li>Personal Experience</li>
                <li>IIT BHU Official Prospectus</li>
                <li>IIT BHU Official Website</li>
                <li><a href="https://iitbhulife.wordpress.com/">Senior Website (Similar to this Website)</a></li>
            </ul>
        </div>
    )
}

export default TnC;