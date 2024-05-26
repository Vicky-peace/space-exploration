
import React from 'react';
import moonImage from '../../assets/destination/image-moon.webp';
import './DestinationDetails.css';

const Moon = () => {
  return (
    <div className="destination-details">
      <img src={moonImage} alt="Moon" className="destination-image" />
      <h2>Moon</h2>
      <p>
        See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
      </p>
      <div className="details">
        <div className="detail-item">
          <span className="label">AVG. DISTANCE</span>
          <span className="value">384,400 KM</span>
        </div>
        <div className="detail-item">
          <span className="label">EST. TRAVEL TIME</span>
          <span className="value">3 DAYS</span>
        </div>
      </div>
    </div>
  );
};

export default Moon;
