import React from "react";
import "../../index.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
  return (
    <section id="contact">
      <h5 className="title-small">Get In Touch</h5>
      <h2 className="title">Contact</h2>

      <div className="container w-[54%] grid grid-cols-1 md:grid-cols-[30%,58%] gap-[12%] ">
        <div className="contact__options">
          <atrical className="contact__option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>rifat20089@hotmail.com</h5>
            <a
              href="mailto:rifat20089@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </atrical>
          <atrical className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Rakibul Hasan</h5>
            <a href="https://m.me/rifatdam" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </atrical>
          <atrical className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+8801625842916</h5>
            <a
              href="https://wa.me/8801625842916"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </atrical>
        </div>
        {/* Form */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
