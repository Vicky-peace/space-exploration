
import React from 'react';
import titanImage from '../../assets/destination/image-titan.png';
import './DestinationDetails.css';

const Titan = () => {
  return (
    <div className="destination-details">
      <img src={titanImage} alt="Moon" className="destination-image" />
      <h2>Titan</h2>
      <p>
      The only moon known to have a dense <br />
      atmosphere other than Earth, Titan is a home <br />
      away from home (just a few hundred degrees <br />
       colder!). As a bonus, you get striking views of the <br />
       Rings of Saturn.
      </p>
      <div className="details">
        <div className="detail-item">
          <span className="label">AVG. DISTANCE</span>
          <span className="value">1.6 BIL.KM</span>
        </div>
        <div className="detail-item">
          <span className="label">EST. TRAVEL TIME</span>
          <span className="value">7 YEARS</span>
        </div>
      </div>
    </div>
  );
};

export default Titan;
