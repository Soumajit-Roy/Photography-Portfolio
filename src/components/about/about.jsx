import React from "react";

import "./about.css";

const About = () => {
  return (
    <>
      <div className="headings" id="about-tag">
        <h2>About Us</h2>
      </div>
      <div className="about-wrapper" >
        <div className="avatar-img">
          <img src="https://placehold.co/500x500"></img>
        </div>
        <div className="about-desc">
          <p>
            Snehashis Routh is a versatile photographer specializing in
            capturing life's most precious moments. With a keen eye for detail
            and a passion for storytelling, he excels in wedding, pre-wedding,
            first rice, maternity, and baby shower shoots. Snehashis combines
            creativity with professionalism to create timeless memories,
            ensuring that every shot reflects the unique emotions and stories
            behind each special occasion.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
