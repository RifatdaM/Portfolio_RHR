import React , { useRef } from "react";
import "../../index.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.USER_ID, process.env.TEMPLATE_ID, form.current, process.env.EMAILJS_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5 className="title-small">Get In Touch</h5>
      <h2 className="title">Contact</h2>

      <div className="container w-4/5 lg:w-[54%] grid grid-cols-1 lg:grid-cols-[30%,58%] gap-[12%] ">
        <div className="flex flex-col gap-5 ">
          <atrical className="contact__option">
            <HiOutlineMail className="contact__icon"/>
            <h4 className="text-md">Email</h4>
            <h5 className="text-xs md:text-sm font-light text-light ">rifat.hasan.rakib@gmail.com</h5>
            <a className="mt-3 inline-block text-xs "
              href="mailto:rifat.hasan.rakib@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </atrical>
          <atrical className="contact__option">
            <BsMessenger className="contact__icon"/>
            <h4 className="text-md">Messenger</h4>
            <h5 className="text-sm font-light text-light ">Rakibul Hasan</h5>
            <a className="mt-3 inline-block text-xs " href="https://m.me/rifatdam" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </atrical>
          <atrical className="contact__option">
            <BsWhatsapp className="contact__icon"/>
            <h4 className="text-md">Whatsapp</h4>
            <h5 className="text-sm font-light text-light ">+8801625842916</h5>
            <a className="mt-3 inline-block text-xs "
              href="https://wa.me/8801625842916"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </atrical>
        </div>
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 ">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
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
