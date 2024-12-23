import React, { useState } from 'react';
import './Education.css';
import theme_pattern from "../../assets/theme_pattern-removebg-preview.png";
import logo1 from "../../assets/universal.jpeg"
import logo2 from "../../assets/thakur.jpeg"
import logo3 from "../../assets/school.jpeg"

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const educationData = [
    {
      logo: logo1, // Replace with the actual path to the first logo
      title: "Universal College Of Engineering, Kaman",
      subtitle: "Bachelor of Technology - BTech, Computer Science and Engineering",
      grade: "Grade: 8.00 CGPA",
      description: "I am currently pursuing a Bachelor’s degree in Computer Science and Engineering at Universal College of Engineering, Kaman. I have completed 7 semesters and have a CGPA of 8.00. ",
    },
    {
      logo: logo2, // Replace with the actual path to the second logo
      title: "Thakur College of Science, Commerce, and Arts, kandivali",
      subtitle: "HSC (XII), Science (PCM)",
      grade: "Grade: 81%",
      description: "I completed my HSC education at Thakur college of Arts, Commerce, and Science, kandivali.",
    },
    {
      logo: logo3, // Replace with the actual path to the third logo
      title: "St. Jerome Convent High School, Mira Road",
      subtitle: "SSC (X)",
      grade: "Grade: 76.50%",
      description: "I completed my class 10 education at St. Jerome Convent High School, Mira Road.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? educationData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === educationData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="education" className="education-section">
      <div className="myeducation-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#9664;
        </button>
        <div className="carousel-content">
          <img
            src={educationData[currentIndex].logo}
            alt={`${educationData[currentIndex].title} logo`}
            className="education-logo"
          />
          <h2>{educationData[currentIndex].title}</h2>
          <h3>{educationData[currentIndex].subtitle}</h3>
          <p className="education-grade">{educationData[currentIndex].grade}</p>
          <p>{educationData[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#9654;
        </button>
      </div>

      <div className="dots">
        {educationData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Education;
