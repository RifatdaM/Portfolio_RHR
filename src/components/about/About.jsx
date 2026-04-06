import React from "react";
import "../../index.css";
import ME from "../../assets/aboutme2.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="title-small">Get To Know</h5>
      <h2 className="title">About Me</h2>
      <div className="container grid grid-cols-1 gap-0 lg:grid-cols-[35%,50%] lg:gap-[15%]">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Rakibul hasan Rifat" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>80+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>45+ completed</small>
            </article>
          </div>

          <p>
            Hello World! This is <b className="text-primary">Rakibul Hasan</b>. A <i>Senior Software Engineer (Frontend)</i>. I have completed my graduation in Computer Science and Engineering from <i>IUBAT - International University of Business Agriculture and Technology.</i> Currently working as a <i>Senior Software Engineer (Frontend )</i> at <a href="https://www.skylarksoft.com/"><b>Skylark Soft Limited</b></a>
          </p>

          <a href="#contact" className="btn btn-primay">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
