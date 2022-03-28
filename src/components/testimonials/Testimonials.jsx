import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../index.css";
import "swiper/css";
import "swiper/css/pagination";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Hasibur Rahman Shuvo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa veniam soluta rerum voluptates ipsum temporibus animi ad eaque hic, dolorem consequuntur eum quasi, quidem atque ratione voluptatem cupiditate placeat?",
  },
  {
    avatar: AVTR2,
    name: "Shaan E Alam",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa veniam soluta rerum voluptates ipsum temporibus animi ad eaque hic, dolorem consequuntur eum quasi, quidem atque ratione voluptatem cupiditate placeat?",
  },
  {
    avatar: AVTR3,
    name: "Sahara Alam",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa veniam soluta rerum voluptates ipsum temporibus animi ad eaque hic, dolorem consequuntur eum quasi, quidem atque ratione voluptatem cupiditate placeat?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className="title-small">Review from clients</h5>
      <h2 className="title">Testimonials</h2>

      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        Autoplay
        className="container w-[9%] md:w-[60%] lg:w-[40%] pb-16 mySwiper"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
