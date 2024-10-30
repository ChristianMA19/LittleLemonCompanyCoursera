// About.js
import React from "react";
import Nav from "./Nav";
import "./About.css";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At Little Lemon restaurant, we are passionate about bringing people
            together through exceptional dining experiences. Whether you’re
            looking to explore new culinary adventures or enjoy a meal with
            friends and family, we aim to make every moment unforgettable.
          </p>
          <p>
            Our mission is simple: to offer you a seamless and delightful
            reservation experience. We believe that securing a table at your
            favorite restaurant should be easy, fast, and stress-free. With our
            user-friendly platform, you can quickly browse local spots, select
            your preferred time, and reserve your table—all with just a few
            taps.
          </p>
          <p>
            We understand the value of time and convenience, which is why our
            system is designed to be mobile-friendly and straightforward.
            Whether you’re at home or on the go, we’re here to ensure that you
            have everything you need to manage your dining plans effortlessly.
          </p>
          <p>Thank you for choosing us to be part of your culinary journey!</p>
        </div>
      </div>
    </>
  );
};

export default About;
