import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons'; 

const Services = () => {
  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <div className="services-container">
          <div className="services-format">
            <FontAwesomeIcon icon={faCode} size="3x" />
         
            <h2>Web Designing</h2>
            <h3>
            Building websites that are both easy to use and visually attractive.
            </h3>
          </div>
          <div className="services-format">
            <FontAwesomeIcon icon={faPalette} size="3x" /> 
           
            <h2>UI/UX Designing</h2>
            <h3>Designing clear and easy-to-use interfaces for a smooth user experience.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
