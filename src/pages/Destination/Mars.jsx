
import React from 'react';
import marsImage from '../../assets/destination/image-mars.png';
import './DestinationDetails.css';

const Mars = () => {
  return (
    <div className="destination-details">
      <img src={marsImage} alt="Moon" className="destination-image" />
      <h2>Mars</h2>
      <p>
      Don't forget to pack your hiking boots. You'll need <br />
      them to tackle Olympus Mons, the tallest <br />
      planetry mountain in our solar system. It's two <br />
      and a half times the size of Everest!
      </p>
      <div className="details">
        <div className="detail-item">
          <span className="label">AVG. DISTANCE</span>
          <span className="value">225 MIL. KM</span>
        </div>
        <div className="detail-item">
          <span className="label">EST. TRAVEL TIME</span>
          <span className="value">9 MONTHS</span>
        </div>
      </div>
    </div>
  );
};

export default Mars;
