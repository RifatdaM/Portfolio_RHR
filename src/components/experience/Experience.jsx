import React from "react";
import "../../index.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="title-small">Skills I have</h5>
      <h2 className="title">My Experience</h2>

      <div className="container experience__container">
        {/* ui ux design skill */}
        <div className="experience__ui">
          <h3>Graphics and UI/UX Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Adobe Illustrator</h4>
                <small className="text-light font-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Adobe Photoshop</h4>
                <small className="text-light font-light">Skilled</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Adobe XD</h4>
                <small className="text-light font-light">Skillful</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Figma</h4>
                <small className="text-light font-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Prototyping</h4>
                <small className="text-light font-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* frontend development skill */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>HTML 5</h4>
                <small className="text-light font-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>CSS</h4>
                <small className="text-light font-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>JavaScript</h4>
                <small className="text-light font-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>XML</h4>
                <small className="text-light font-light">Skilled</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>React JS</h4>
                <small className="text-light font-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>React Native</h4>
                <small className="text-light font-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Bootstrap</h4>
                <small className="text-light font-light">Skilled</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__content-icon"/>
              <div className="experience__details-text">
                <h4>Tailwind CSS</h4>
                <small className="text-light font-light">Skillful</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
