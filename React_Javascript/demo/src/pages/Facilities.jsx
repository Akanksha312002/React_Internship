import React from "react";
import "./CampusFacilities.css";
import facilitiesData from "./facilitiesData";

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h1>Campus Facilities</h1>
      <p>Explore the top-class facilities available on our campus.</p>
      <div className="facilities-grid">
        {facilitiesData.map((facility, index) => (
          <div key={index} className="facility-card">
            <img src={facility.image} alt={facility.title} />
            <div className="facility-info">
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
