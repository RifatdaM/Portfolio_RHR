import React from "react";
import "../../index.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="title-small">My Recent Work</h5>
      <h2 className="title">Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            <a
              href=""
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            <a
              href=""
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            <a
              href=""
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            <a
              href=""
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            <a
              href=""
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Book Drop a proper library Managment system" />
          </div>
          <h3>Book Drop - Library Managment App</h3>
          <div className="item-cta">
            <a
              href="https://github.com/Fantastic-Four-CSC-370/Book-Drop"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            <a
              href=""
              className="btn btn-primay"
              target="_blank"
              rel="noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
