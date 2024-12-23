import React, { useEffect, useState } from "react";
import "./Hero.css";
import resume from '../../assets/Resume.pdf'; 
import profile_img from "../../assets/profile.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "a Full Stack Web Developer;",
    "a Frontend Designer;",
    "a Web Designer;",
  ];

  useEffect(() => {
    const currentString = texts[currentIndex];
    const interval = setInterval(
      () => {
        if (!isDeleting && letterIndex < currentString.length) {
          setCurrentText((prev) => prev + currentString[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        } else if (isDeleting && letterIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setLetterIndex((prev) => prev - 1);
        } else if (!isDeleting && letterIndex === currentString.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && letterIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(interval);
  }, [letterIndex, isDeleting, currentIndex, texts]);

  const openResumeModal = () => setIsModalOpen(true);
  const closeResumeModal = () => setIsModalOpen(false);

  return (
    <div id="home" className="hero">
      <div className="hero-image">
        <img src={profile_img} alt="Profile" />
      </div>
      <div className="hero-content">
        <h1 className="greeting">Hello, I’m</h1>
        <h1 className="name">Vandana Tripathi</h1>
        <h2>
          And I’m <span className="dynamic-text">{currentText}</span>
        </h2>
        <p>
          A dedicated Full-Stack Web Developer and technical member of Google
          Cloud at my campus, passionate about leveraging technology to create
          impactful solutions.
        </p>
        <div className="social-icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="hero-action">
          <button className="hero-connect">
            <AnchorLink className={"anchor-link"} offset={50} href="#contact">
              Connect with Me
            </AnchorLink>
          </button>
          <button className="hero-resume" onClick={openResumeModal}>
            My Resume
          </button>
        </div>
      </div>

      {/* Modal to display Resume */}
      {isModalOpen && (
        <div className="resume-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeResumeModal}>
              &times; Close
            </button>
            <iframe
              src={resume}
              width="100%"
              height="600px"
              title="Resume"
            ></iframe>
            <a
              href={resume}
              download="My_Resume.pdf"
              className="download-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
