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
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, at? Magnam veniam consequatur, enim placeat maxime
            laudantium odit laboriosam eaque deleniti! Eos voluptatem suscipit
            ducimus maiores! Repellendus, laboriosam! Exercitationem, et.
          </p>

          <a href="#contact" className="btn btn-primay">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
