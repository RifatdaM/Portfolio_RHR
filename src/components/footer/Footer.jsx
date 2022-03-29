import React from "react";
import "../../index.css";
import {
  FaFacebookSquare,
  FaBehanceSquare,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin,BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-center text-sm mt-[10rem] ">
      <a
        href="#"
        className="text-background text-3xl font-medium mb-8 inline-block"
      >
        Rakibul Hasan Rifat
      </a>

      <ul className="flex flex-wrap justify-center gap-8 mx-auto mb-12">
        <li>
          <a className="font-light text-xs text-background" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="font-light text-xs text-background" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="font-light text-xs text-background" href="#experience">
            My Experience
          </a>
        </li>
        <li>
          <a className="font-light text-xs text-background" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="font-light text-xs text-background" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="font-light text-xs text-background"
            href="#testimonials"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a className="font-light text-xs text-background" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16 ">
        <a
          href="https://www.facebook.com/rifatdam/"
          className="text-white bg-background p-3 rounded-xl flex border-[1px] border-solid border-transparent hover:bg-transparent hover:text-background hover:border-background  "
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/rakibrifat/"
          className="text-white bg-background p-3 rounded-xl flex border-[1px] border-solid border-transparent hover:bg-transparent hover:text-background hover:border-background  "
        >
          <GrInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/rifatdam/"
          className="text-white bg-background p-3 rounded-xl flex border-[1px] border-solid border-transparent hover:bg-transparent hover:text-background hover:border-background  "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/RifatdaM"
          className="text-white bg-background p-3 rounded-xl flex border-[1px] border-solid border-transparent hover:bg-transparent hover:text-background hover:border-background "
        >
          <BsGithub />
        </a>
        <a
          href="https://www.behance.net/rifatdam"
          className="text-white bg-background p-3 rounded-xl flex border-[1px] border-solid border-transparent hover:bg-transparent hover:text-background hover:border-background  "
        >
          <FaBehanceSquare />
        </a>
      </div>

      <div className="mb-16 text-background font-thin">
        <small>&copy; Rakibul Hasan. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
