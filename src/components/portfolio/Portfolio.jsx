import React from "react";
import "../../index.css";
import { BsGithub } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";

// You'll need to add these images to your assets folder
import ZUMS from "../../assets/zums.png";
import XOLAREN from "../../assets/xolaren.png";
import ZARKIN from "../../assets/zarkin.png";
import INOA from "../../assets/inoa.png";
import CODEX from "../../assets/codex.png";
import FIVER from "../../assets/5r.png";
import AUTODRIVE from "../../assets/autodrive.png";
import MUSASHI from "../../assets/musashi.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ZNRF University of Management Sciences",
      description: "University website redesign with modern UI/UX principles",
      image: ZUMS,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://zums.edu.bd/",
      alt: "ZNRF University of Management Sciences website"
    },
    {
      id: 2,
      title: "Xolaren",
      description: "Company portfolio redesign with smooth animations",
      image: XOLAREN,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://xolaren.vercel.app/",
      alt: "Xolaren company portfolio website"
    },
    {
      id: 3,
      title: "Zarkin",
      description: "Single page company portfolio with interactive elements",
      image: ZARKIN,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://zarkin.net/",
      alt: "Zarkin company portfolio website"
    },
    {
      id: 4,
      title: "Inoa Marine",
      description: "Maritime company website with advanced animations",
      image: INOA,
      technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://inoamarine.com/",
      alt: "Inoa Marine company website"
    },
    {
      id: 5,
      title: "Codex IT",
      description: "Software and IT solution company portfolio with server-side rendering",
      image: CODEX,
      technologies: ["Next.js", "SCSS", "GSAP"],
      liveLink: "https://codex-website2-0.vercel.app/",
      alt: "Codex IT company website"
    },
    {
      id: 6,
      title: "5R",
      description: "Company portfolio redesign with stylish animations",
      image: FIVER,
      technologies: ["React", "SCSS", "Framer Motion"],
      liveLink: "https://5r-beta.vercel.app/",
      alt: "5R company portfolio website"
    },
    {
      id: 7,
      title: "Autodrive",
      description: "Automobile magazine website with responsive design",
      image: AUTODRIVE,
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://autodrive.com.bd/",
      alt: "Autodrive automobile magazine website"
    },
    {
      id: 8,
      title: "Musashi Mart",
      description: "E-commerce platform for heavy equipment spare parts in Bangladesh",
      image: MUSASHI,
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://musashimart.com/",
      alt: "Musashi Mart e-commerce website"
    }
  ];

  return (
    <section id="portfolio">
      <h5 className="title-small">My Recent Work</h5>
      <h2 className="title">Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, title, description, image, technologies, liveLink, alt }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={image} alt={alt} />
            </div>
            <h3>{title}</h3>
            <p className="text-light mb-2">{description}</p>
            <div className="mb-6 portfolio__item-labels">
              {technologies.map((tech, index) => (
                <span key={index} className="item-label">{tech}</span>
              ))}
            </div>
            <div className="item-cta">
              <a
                href={liveLink}
                className="btn btn-primay"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
