import React from "react";
import "./Mywork.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons
import theme_pattern from "../../assets/theme_pattern-removebg-preview.png";
import mywork_data from "../../assets/mywork_data.js";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1> My Latest Works</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="timeline-container">
        <div className="vertical-line"></div>
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Image */}
            <div className="project-image-container">
              <img
                src={work.w_img}
                alt={`Project ${index + 1}`}
                className="project-image"
              />
              <div className="hover-icons">
                <a href={work.github_link} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub className="icon" title="GitHub" />
                </a>
                <a href={work.live_demo_link} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaExternalLinkAlt className="icon" title="Live Demo" />
                </a>
              </div>
            </div>

            {/* Horizontal Line with Dot */}
            <div
              className={`horizontal-line ${
                index % 2 === 0 ? "horizontal-left" : "horizontal-right"
              }`}
            >
              <div className="horizontal-dot"></div>
            </div>

            {/* Content */}
            <div className="project-content">
              <h3 className="project-title">{work.w_name}</h3>
              <p className="project-description">{work.description}</p>
              <div className="tech-stack">
                {work.tech_stack.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
