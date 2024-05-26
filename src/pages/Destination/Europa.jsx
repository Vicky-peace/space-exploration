
import React from 'react';
import europa from '../../assets/destination/image-europa.png';
import './DestinationDetails.css';

const Europa = () => {
  return (
    <div className="destination-details">
      <img src={europa} alt="Moon" className="destination-image" />
      <h2>Europa</h2>
      <p>
       The smallest of the four Galilean moons orbiting <br />
       Jupiter,Europa is a winter lover's dream. With an <br />
       icy surface, it's perfect for a bit ice skating, <br />
       curling, hockey, or simple relaxation in your snug <br />
       wintery cabin.
      </p>
      <div className="details">
        <div className="detail-item">
          <span className="label">AVG. DISTANCE</span>
          <span className="value">628 MIL. KM</span>
        </div>
        <div className="detail-item">
          <span className="label">EST. TRAVEL TIME</span>
          <span className="value">3 YEARS</span>
        </div>
      </div>
    </div>
  );
};

export default Europa;
