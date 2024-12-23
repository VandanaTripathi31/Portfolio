import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern-removebg-preview.png";
import mail_icon from "../../assets/mail_icon.png";
import location_icon from "../../assets/location_icon.png";
import call_icon from "../../assets/call_icon.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0d220af9-fc95-4817-b99a-f65e2c786003");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      {/* Title Section */}
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Decorative Pattern" />
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        {/* Left Content */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm always excited to connect with fellow developers and anyone
            passionate about technology. Let's create something amazing
            together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <p>tripathivandana086@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>9004779954</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Mira Road, Thane</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
