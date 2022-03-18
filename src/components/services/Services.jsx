import React from "react";
import "../../index.css";
import { BsCheckAll } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5 className="title-small">What I Offer</h5>
      <h2 className="title">Services</h2>

      <div className="container service__container">
        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>UX Resource</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>UI Design</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Design system</p>
            </li>
          </ul>
        </article>

        {/* Frontend Development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Static Portfolio Website</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Multipage website</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Android app</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Crossplatform app with React Native</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Frontend development using React JS</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
