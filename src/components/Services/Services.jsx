import React from "react";
import "./Services.css";
import {
  frontendIcons,
  backendIcons,
  otherIcons,
} from "../../assets/Servicedata.js";
import theme_pattern from "../../assets/theme_pattern-removebg-preview.png";

const Card = ({ title, icons }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="icon-grid">
        {icons.map((icon, index) => (
          <div key={index} className="icon-item">
            <i className={icon.class}></i>
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id="services" className="Services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        <Card title="Frontend" icons={frontendIcons} />
        <Card title="Backend" icons={backendIcons} />
        <Card title="Others" icons={otherIcons} />
      </div>
    </div>
  );
};

export default Services;
