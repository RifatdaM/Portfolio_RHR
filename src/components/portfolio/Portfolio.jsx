import React from "react";
import "../../index.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.jpg";
import {BsGithub} from 'react-icons/bs'
import {ImBehance2} from 'react-icons/im'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="title-small">My Recent Work</h5>
      <h2 className="title">Portfolio</h2>

      <div className="container portfolio__container">
        {/* Project 1 */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="portfolio__item-labels mb-6">
            <span className="item-label">XML</span>
            <span className="item-label">Java</span>
            <span className="item-label">Material UI</span>
          </div>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <BsGithub className="mr-2" />
              Github
            </a>
          </div>
        </article>
        {/* Project 2 */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Wear N Adorn - eCommerce Shop App UI Design</h3>
          <div className="portfolio__item-labels mb-6">
            <span className="item-label">Abode Illustrator</span>
            <span className="item-label">Adobe XD</span>
          </div>
          <div className="item-cta">
            <a
              href="https://www.behance.net/gallery/138203683/Wear-N-Adorn-eCommerce-mobile-UIIX"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <ImBehance2 className="mr-2"/>
              Behance
            </a>
          </div>
        </article>
        {/* Project 3 */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="portfolio__item-labels mb-6">
            <span className="item-label">Abode Illustrator</span>
            <span className="item-label">Adobe XD</span>
            <span className="item-label">HTML</span>
            <span className="item-label">Tailwind CSS</span>
          </div>
          <div className="item-cta">
            <a
              href="https://github.com/RifatdaM/courier-web-UI"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <BsGithub className="mr-2" />
              Github
            </a>
            <a
              href="https://www.behance.net/gallery/138290155/Courier-agency-Portfolio-UI-Design"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <ImBehance2 className="mr-2" />
              Behance
            </a>
          </div>
        </article>
        {/* Project 4 */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Machronics - Website UI Dedesign</h3>
          <div className="portfolio__item-labels mb-6">
            <span className="item-label">HTML</span>
            <span className="item-label">Tailwind CSS</span>
          </div>
          <div className="item-cta">
            <a
              href="https://github.com/RifatdaM/Machronics_ui_2.0"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <BsGithub className="mr-2" />
              Github
            </a>
            <a
              href="https://rifatdam.github.io/Machronics_ui_2.0/"
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Project 5 */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Healthy Ogranic Food - Resturent Single page Website</h3>
          <div className="portfolio__item-labels mb-6">
            <span className="item-label">HTML</span>
            <span className="item-label">Bootstrap 5</span>
            <span className="item-label">CSS</span>
            <span className="item-label">JavaScript</span>
          </div>
          <div className="item-cta">
            <a
              href="https://github.com/RifatdaM/Machronics_UI"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <BsGithub className="mr-2" />
              Github
            </a>
            <a
              href="https://rifatdam.github.io/Resturant_app_UI/"
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* project 6 */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>GEO - 3D Printer Company Logo Design</h3>
          <div className="portfolio__item-labels mb-6">
            <span className="item-label">Adobe Illustrator</span>
            <span className="item-label">Adobe Photoshop</span>

          </div>
          <div className="item-cta">
          <a
              href="https://www.behance.net/gallery/128397275/3D-Printer-Manufacturer-Company-GEO-Logo"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <ImBehance2 className="mr-2" />
              Behance
            </a>
           
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
