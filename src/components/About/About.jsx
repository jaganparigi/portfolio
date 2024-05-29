import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a experienced frontend developer with over a decade of
              professional expertiese in the field. Throughout my career, I have
              had the privilege of collabarating with organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}}/></div>
            <div className="about-skill"><p>React</p><hr style={{width: "70%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width: "90%"}}/></div>
            <div className="about-skill"><p>NextJS</p><hr style={{width: "100%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>40+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        <hr className="about-client-hr"/>
      </div>
    </div>
  );
};

export default About;
